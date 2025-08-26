import { IconlyStar, PriceCard } from "@/components";
import { useGetPlans } from "@/core";
import i18n from "@/i18n";
import type { Plan as PlanType } from "@/types/landing";
import { Typography } from "antd";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty } from "ramda";

export const Plan: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetPlans();

  return (
    !isEmpty(data) && (
      <div className="py-20 relative sm:px-0 px-10">
        <div className="flex flex-col justify-center items-center gap-2 sm:w-5/12 w-full m-auto mb-20 relative z-10">
          <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-8 bg-[#FDFDFD] border-1 border-[#E9E9E9] my-8 w-44">
            <IconlyStar color="#0065FD" />
            <span className="text-[#0065FD]">
              {t("landing.plan.planTitle")}
            </span>
            <IconlyStar color="#0065FD" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Typography.Title level={1} className="text-center !leading-16">
              {t("landing.plan.planText")}
            </Typography.Title>
          </div>
        </div>

        <div className="flex sm:justify-center items-end gap-4 m-auto relative z-10 sm:overflow-visible overflow-x-auto scrollbar-hide smooth-scroll">
          {data?.map((item: PlanType) => (
            <PriceCard
              key={item.id}
              data={{
                title: i18n.language === "fa" ? item.title_fa : item.title_en,
                price: i18n.language === "fa" ? item.price_fa : item.price_en,
                content:
                  i18n.language === "fa" ? item.content_fa : item.content_en,
                isRecommended: item.isRecommended,
                id: item.id,
              }}
              lang={i18n.language}
              onClick={() =>
                window.open(
                  `${import.meta.env.VITE_APP_URL}/subscription/${item.id}`
                )
              }
            />
          ))}
        </div>
      </div>
    )
  );
};
