import { IconlyStar } from "@/components";
import Particles from "@/components/Animation/Particles";
import { useGetFaq } from "@/core";
import i18n from "@/i18n";
import { Collapse, Typography, type CollapseProps } from "antd";
import { isEmpty } from "ramda";
import { useEffect, useState, type FC } from "react";
import { useTranslation } from "react-i18next";

export const FAQ: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetFaq();
  const [dataCollapse, setDataCollapse] = useState<CollapseProps["items"]>([]);

  useEffect(() => {
    if (data) {
      const collapseItems: CollapseProps["items"] = data.map((element) => ({
        key: element.id,
        label: i18n.language === "fa" ? element.name_fa : element.name_en,
        children: (
          <p>
            {i18n.language === "fa" ? element.content_fa : element.content_en}
          </p>
        ),
        className: "bg-[#FDFDFD] !border !border-[#E9E9E9] !mb-8 !rounded-lg !pb-2",
      }));

      setDataCollapse(collapseItems);
    }
  }, [data, i18n.language]);

  return (
    !isEmpty(data) && (
      <div className="py-20 relative">
        <div className="flex flex-col justify-center items-center gap-2 w-5/12 m-auto mb-20 relative z-10">
          <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-8 bg-[#FDFDFD] border-1 border-[#E9E9E9] my-8">
            <IconlyStar color="#0065FD" />
            <span className="text-[#0065FD]">
              {t("landing.faq.askTalkino")}
            </span>
            <IconlyStar color="#0065FD" />
          </div>

          <div className="flex flex-col items-center gap-2 w-6/12">
            <Typography.Title level={1} className="text-center !leading-16">
              {t("landing.faq.frequentlyAskedQuestions")}
            </Typography.Title>
          </div>
        </div>

        <div className="w-6/12 flex flex-col items-end gap-2 m-auto relative z-10 pb-2">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            items={dataCollapse}
            className="w-full !bg-transparent"
          />
        </div>

        <div className="absolute top-0 right-0 z-0 w-full h-full flex justify-center">
          <Particles
            particleColors={["#E9E9E9", "#E9E9E9"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
    )
  );
};
