import type { PriceCardData } from "@/types";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { DotGrid } from "../Animation";
import { Button, Typography } from "antd";
import { IconlyDollar, IconlyRial } from "../icon";

interface PriceCardProps {
  data: PriceCardData;
  onClick: (data: PriceCardData) => void;
  lang: string;
}

export const PriceCard: FC<PriceCardProps> = (props) => {
  const { data, onClick, lang } = props;
  const { t } = useTranslation();
  return (
    <div
      key={data.id}
      className="border border-cyan-200 px-6 py-8 w-11/12 sm:w-3/12 rounded-md relative flex-shrink-0 h-full transition-all duration-300 bg-separator1"
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <DotGrid
          dotSize={2}
          gap={10}
          baseColor="#f5f5f5"
          activeColor="#d4d4d4"
          proximity={120}
          shockRadius={150}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="!p-0"
        />
      </div>
      <div className="p-2 border-b border-cyan-200 mb-2 flex flex-col gap-2 relative z-10">
        <Typography.Title level={3}>{data.title}</Typography.Title>
        <Button block type="primary" size="large" onClick={() => onClick(data)}>
          {t("common.getStarted")}
        </Button>
      </div>

      <div className="flex items-center py-3 border-b border-cyan-200 relative z-10">
        {lang === "fa" ? (
          <IconlyRial color="#00b8db" size={30} />
        ) : (
          <IconlyDollar color="#00b8db" size={30} />
        )}
        <Typography.Text className="!text-cyan-500 font-medium !text-2xl">
          {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،")}
        </Typography.Text>
        <Typography.Text className="!text-cyan-500 font-medium !text-2xl">
          /{t("common.perMonth")}
        </Typography.Text>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
        className="!text-neutral-500 font-medium leading-10 relative z-10 h-80"
      />
    </div>
  );
};
