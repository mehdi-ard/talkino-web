import { PriceCard } from "@/components";
import { useGetPlans } from "@/core";
import i18n from "@/i18n";
import type { Plan } from "@/types";
import { Typography } from "antd";
import { useEffect, type FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Pricing: FC = () => {
  const { data } = useGetPlans();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-10/12 m-auto mt-20">
      <div className="mb-20 flex justify-center">
        <Typography.Title level={2} className="!text-center">
          <Trans
            i18nKey="pages.pricingTitle"
            components={{
              span: (
                <span className="!text-cyan-500 drop-shadow-xs drop-shadow-cyan-500" />
              ),
            }}
          />
        </Typography.Title>
        <Typography.Text>{t("pages.pricingText")}</Typography.Text>
      </div>

      <div className="flex sm:justify-center items-stretch gap-4 m-auto relative z-10 sm:overflow-visible overflow-x-auto overflow-y-hidden scrollbar-hide smooth-scroll">
        {data?.map((item: Plan) => (
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
              navigate(
                `${import.meta.env.VITE_APP_URL}/subscription/${item.id}`
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
