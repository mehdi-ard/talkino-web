import { Typography } from "antd";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import AppMock from "@/assets/image/App.png";
import { IconlyStar } from "@/components";
import { useGetDownload } from "@/core";
import type { Download as DownloadType } from "@/types/landing";

export const Download: FC = () => {
  const { t } = useTranslation();
  const {data} = useGetDownload()
  return (
    <div className="bg-[#634E99] w-full flex justify-center items-end h-80 mb-20 gap-10 mt-64">
      <div className="h-full w-2/12 flex justify-center items-end ">
        <img
          src={AppMock}
          alt="Talkino App"
          className=" w-full object-[0px_80px]"
        />
      </div>
      <div className="flex flex-col items-center gap-5 w-3/12 h-full justify-center">
        <div className="w-full flex justify-center items-start flex-col">
          <div className="flex justify-center px-2 py-2 rounded-lg gap-2 mt-10 bg-[#FDFDFD] border-1 border-[#E9E9E9]">
            <IconlyStar color="#0065FD" />
            <span className="!text-[#0065FD]">{t("landing.download.downloadFlash")}</span>
            <IconlyStar color="#0065FD" />
          </div>
        </div>
        <Typography.Title level={3} className="!text-neutral-50">
          {t("landing.download.downloadTitle")}
        </Typography.Title>

        <div className="w-full flex flex-wrap ">
          {
            data?.map((item:DownloadType)=><div key={item.id} className="h-16 w-6/12 p-1">
              <a href={item.link} target="_blank" rel="noreferrer" className="flex w-full h-full">
              <img src={import.meta.env.VITE_APP_API_URL + "/" +item.icon} alt={item.title} className="w-full h-full" />
              </a>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};
