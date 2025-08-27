import { word } from "@/enums/badWords";
import type { ContactUs, Social } from "@/types";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useRef, type FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import Cover from "@/assets/image/cover.png";
import { Link } from "react-router-dom";
import { useGetSocial } from "@/core";
import { LottieAnimation, type LottieAnimationHandle } from "@/components";
import { replaceColor } from "lottie-colorify";
import Mail from "@/assets/lottie/mail.json";
import Phone from "@/assets/lottie/phone.json";

const Contact: FC = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const playerMailRef = useRef<LottieAnimationHandle | null>(null);
  const playerPhoneRef = useRef<LottieAnimationHandle | null>(null);


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


  //   const { mutate, isPending } = useContactUs();
  const { data } = useGetSocial();

  const handelSubmit = (model: ContactUs) => {
    // mutate(model);
    console.log(model);
    
  };

  const allBadWords = [...word.mild, ...word.strong, ...word.very_strong];
  const containsFarsiProfanity = (text: string) => {
    return allBadWords.some((word) => text.includes(word));
  };

  return (
    <div className="p-10 h-full flex w-full flex-wrap">
      <div className="w-full h-full flex flex-col justify-between py-10 relative bg-neutral-500 mb-20">
        <div className="w-full flex flex-col justify-center items-center z-10 relative py-10 sm:backdrop-blur-none backdrop-blur-lg">
          <Typography.Title level={3} className="!text-neutral-50">
            {t("contact.contactInfo")}
          </Typography.Title>
          <Typography.Text className="!text-neutral-50 text-center">
            <Trans
              i18nKey="contact.saySomething"
              components={{
                Link: (
                  <Link to="/faq" className="!text-neutral-300"/>
                ),
              }}
            />
          </Typography.Text>
        </div>

        <div className="absolute top-0 left-0 h-full">
          <img src={Cover} alt="" className="h-full" />
        </div>

      </div>

      <div className="flex items-center justify-center w-full h-full">
        <Form form={form} layout="vertical" onFinish={handelSubmit}>
          <Row gutter={[16, 16]}>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                name="subject"
                label={t("contact.subject")}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                name="fullname"
                label={t("contact.fullname")}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                name="email"
                label={t("contact.email")}
                rules={[
                  {
                    required: true,
                  },
                  {
                    type: "email",
                    message: t("contact.unValidEmail"),
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item name="phoneNumber" label={t("contact.phoneNumber")}>
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col md={24} sm={24} xs={24}>
              <Form.Item
                name="message"
                label={t("contact.message")}
                rules={[
                  {
                    required: true,
                  },
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();
                      if (containsFarsiProfanity(value)) {
                        return Promise.reject();
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input.TextArea autoSize={{ minRows: 4, maxRows: 8 }} />
              </Form.Item>
            </Col>
            <Col md={4} sm={24} xs={24}>
              <Button htmlType="submit" block size="large">
                {t("contact.submit")}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-20">
        <div
          className="flex flex-col items-center justify-center gap-2 bg-neutral-200 sm:w-4/12 w-full h-40 rounded-lg"
          onMouseEnter={() => playerMailRef.current?.play()}
          onMouseLeave={() => playerMailRef.current?.stop()}
        >
          <div className="w-12 h-12">
            <LottieAnimation
              animationData={replaceColor("#000000", "#000000", Mail)}
              autoplay={true}
              loop={false}
              ref={playerMailRef}
            />
          </div>
          <a
            href="mailto:info@talkino.com"
            className="text-neutral-500 hover:text-neutral-300 text-md"
          >
            info@talkino.com
          </a>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-neutral-200 sm:w-4/12 w-full h-40 rounded-lg"
          onMouseEnter={() => playerPhoneRef.current?.play()}
          onMouseLeave={() => playerPhoneRef.current?.stop()}
        >
          <div className="w-12 h-12">
            <LottieAnimation
              animationData={replaceColor("#000000", "#000000", Phone)}
              autoplay={true}
              loop={false}
              ref={playerPhoneRef}
            />
          </div>
          <a
            href="tel:+989362214466"
            className="text-neutral-500 hover:text-neutral-300 text-md"
          >
            (+98) 936 221 44 66
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-2 bg-neutral-200 sm:w-4/12 w-full h-40 rounded-lg"
        >
        {
            data?.map((item: Social) => (
              <a
                href={item.link}
                className="text-neutral-500 hover:text-neutral-300 text-md"
                key={item.socialMedia}
              >
                <img
                  src={
                    import.meta.env.VITE_APP_API_URL + "/" + item.iconDark
                  }
                  className="w-8 h-8"
                  alt={item.socialMedia}
                />
              </a>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Contact;
