import { IconlyStar } from "@/components";
import { useGetPlans } from "@/core";
import i18n from "@/i18n";
import type { Plan as PlanType } from "@/types/landing";
import { Button, Typography } from "antd";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export const Plan: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetPlans();

  return (
    <div className="py-20 relative">
      <div className="flex flex-col justify-center items-center gap-2 w-5/12 m-auto mb-20 relative z-10">
        <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-8 bg-[#FDFDFD] border-1 border-[#E9E9E9] my-8 w-44">
          <IconlyStar color="#0065FD" />
          <span className="text-[#0065FD]">{t("landing.plan.planTitle")}</span>
          <IconlyStar color="#0065FD" />
        </div>

        <div className="flex flex-col items-center gap-2 w-6/12">
          <Typography.Title level={1} className="text-center !leading-16">
            {t("landing.plan.planText")}
          </Typography.Title>
        </div>
      </div>

      <div className=" flex justify-center items-center gap-2 m-auto relative z-10">
        {data?.map((item: PlanType) => (
          <div className="flex flex-col items-center w-2/12" key={item.id}>
            {item.isRecommended && (
              <div className="p-1.5 w-full rounded-t-md bg-[#634E99] flex justify-center">
                <span className="text-neutral-50 text-center">
                  {t("landing.plan.recommendedPlan")}
                </span>
              </div>
            )}

            <div className="px-4 py-7 border border-neutral-300 flex justify-between flex-col items-center h-96">
              <span className="text-3xl">
                {i18n.language === "fa" ? item.title_fa : item.title_en}
              </span>

              <span className="text-center">
                {i18n.language === "fa" ? item.content_fa : item.content_fa}
              </span>

              <span className="text-3xl font-bold">
                {i18n.language === "fa" ? item.price_fa : item.price_en}
              </span>

              <Button>Get Started</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
