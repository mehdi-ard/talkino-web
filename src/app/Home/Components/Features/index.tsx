import Artboard from "@/assets/image/Artboard.png";
import Chat from "@/assets/image/Chat.png";
import Reminder from "@/assets/image/Container.png";
import PrivateMeeting from "@/assets/image/Join Meeting.png";
import { IconlyStar } from "@/components";
import Threads from "@/components/Animation/Threads";
import { useGetFeature } from "@/core";
import { Button, Carousel, Typography } from "antd";
import cn from "classnames";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Features: FC = () => {
  const {t}=useTranslation()
  const {data}= useGetFeature()
  const dataFeatures = [
    {
      title: "Chat",
      description: "Send messages, share files, and chat in meetings.",
      image: Chat,
    },
    {
      title: "Artboard",
      description:
        "Draw ideas together using real-time collaborative whiteboard.",
      image: Artboard,
    },

    {
      title: "Reminder",
      description: "Set up a new meeting and get your meeting link",
      image: Reminder,
    },
    {
      title: "Private Meeting",
      description: "Set up a new meeting and get your meeting link",
      image: PrivateMeeting,
    },
  ];
  return (
    <section className="flex relative bg-[#2B2B2B] px-4 my-10 rounded-md justify-between">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Threads
          amplitude={3.5}
          distance={0.6}
          enableMouseInteraction={true}
        />
      </div>
      <div className="w-6/12 flex flex-col justify-between py-10 px-4">
        <div>
          <div className="flex justify-center bg-[#171717] border-1 border-[#525252] px-2 py-2 rounded-lg gap-2 my-10 w-36">
            <IconlyStar color="#ffffff" />
            <span className="text-white">{t('landing.features.features')}</span>
            <IconlyStar color="#ffffff" />
          </div>

          <div className="flex flex-col items-center gap-2 w-5/12">
            <Typography.Title level={1} className="!text-white">
              {t('landing.features.allNeeded')}
            </Typography.Title>
          </div>
        </div>

        <div className="w-7/12 flex flex-col gap-2">
          <div>
            <span className="text-white">
              {t('landing.features.description')}
            </span>
          </div>
          <div>
            <Button size="large">{t('common.seemore')}</Button>
          </div>
        </div>
      </div>

      <div className="w-4/12 ">
        <Carousel
          arrows={false}
          dots={false}
          infinite={true}
          vertical
          slidesToShow={3}
          slidesToScroll={1}
          centerMode
          autoplay
          centerPadding="60px"
          speed={5000}
          autoplaySpeed={5000}
          cssEase="linear"
          pauseOnHover
          verticalSwiping={true}
        >
          {data?.map((item:any, index:number) => (
            <div
              key={index}
              className={cn(
                "w-full !flex justify-between items-end gap-2 rounded-xl overflow-hidden h-64 my-3 bg-linear-to-tr from-neutral-800 to-neutral-600 from-5% to-95%"
              )}
            >
              <div className="w-8/12 p-5">
                <Typography.Title level={2} className="!text-white">
                  {item.title}
                </Typography.Title>
                <Typography.Text className="!text-white">
                  {item.description}
                </Typography.Text>
              </div>

              <div className="translate-y-4/12 w-8/12 h-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-top-left"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
