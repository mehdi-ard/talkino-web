import { DotGrid, IconlyDollar, IconlyRial, PriceCard } from "@/components";
import { useGetPlans } from "@/core";
import i18n from "@/i18n";
import type { Plan } from "@/types";
import { Button, Typography } from "antd";
import { useEffect, type FC } from "react";
import { Trans, useTranslation } from "react-i18next";

const Pricing: FC = () => {
  const { data } = useGetPlans();
  const { t } = useTranslation();

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[])

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
            <PriceCard key={item.id} data={{
                title: i18n.language === "fa" ? item.title_fa : item.title_en,
                price: i18n.language === "fa" ? item.price_fa : item.price_en,
                content: i18n.language === "fa" ? item.content_fa : item.content_en,
                isRecommended: item.isRecommended,
                id: item.id
            }}
            lang={i18n.language}
            onClick={() => console.log('clicked')}
            />
        //   <div
        //     key={item.id}
        //     className="border border-cyan-200 px-6 py-8 w-3/12 rounded-md relative"
        //   >
        //     <div className="absolute top-0 left-0 h-full w-full">
        //       <DotGrid
        //         dotSize={2}
        //         gap={10}
        //         baseColor="#f5f5f5"
        //         activeColor="#d4d4d4"
        //         proximity={120}
        //         shockRadius={150}
        //         shockStrength={5}
        //         resistance={750}
        //         returnDuration={1.5}
        //         className="!p-0"
        //       />
        //     </div>
        //     <div className="p-2 border-b border-cyan-200 mb-2 flex flex-col gap-2 relative z-10">
        //       <Typography.Title level={3} className="!m-0">
        //         {i18n.language === "fa" ? item.title_fa : item.title_en}
        //       </Typography.Title>
        //       <Button block size="large">
        //         {t("common.getStarted")}
        //       </Button>
        //     </div>

        //     <div className="flex items-center py-3 border-b border-cyan-200 relative z-10">
        //       {i18n.language === "fa" ? (
        //         <IconlyRial color="#00b8db" size={30} />
        //       ) : (
        //         <IconlyDollar color="#00b8db" size={30} />
        //       )}
        //       <Typography.Text className="!text-cyan-500 font-medium !text-2xl">
        //         {i18n.language === "fa" ? item.price_fa : item.price_en}
        //       </Typography.Text>
        //       <Typography.Text className="!text-cyan-500 font-medium !text-2xl">
        //         /{t("common.perMonth")}
        //       </Typography.Text>
        //     </div>

        //     <div
        //       dangerouslySetInnerHTML={{
        //         __html:
        //           i18n.language === "fa"
        //             ? (item.content_fa as string)
        //             : (item.content_en as string),
        //       }}
        //       className="!text-neutral-500 font-medium leading-10 relative z-10"
        //     />
        //   </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
