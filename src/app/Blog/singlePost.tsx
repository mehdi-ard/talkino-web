import { IconlyTimer } from "@/components";
import { useGetOnePost } from "@/core";
import { getConvertDate } from "@/helper";
import i18n from "@/i18n";
import { Divider, Typography } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const { data } = useGetOnePost(id as string);
  const {t} = useTranslation()


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


  return (
    <div className="flex flex-col w-10/12 m-auto mt-20">
      <div>
        <div className="flex items-center gap-2 mb-5">
            <Typography.Text className="block  !text-neutral-400 font-medium">
          {getConvertDate(data?.createdAt, "YYYY MMMM DD", i18n.language)}
        </Typography.Text>

        <Divider type="vertical" className="!border-neutral-400" />

        <Typography.Text className="!text-neutral-400 font-medium flex gap-1">
            <IconlyTimer size={20} color="#a1a1a1" />
            {t('common.readTime', {time:data?.timeToRead})}
        </Typography.Text>
        </div>
        <Typography.Title level={1} className="!m-0">
          {i18n.language === "fa" ? data?.title_fa : data?.title_en}
        </Typography.Title>
      </div>

      <div className="h-96 rounded-2xl overflow-hidden bg-neutral-200 my-10 shadow-xl">
        <img
          src={import.meta.env.VITE_APP_API_URL + "/" + data?.image}
          alt={data?.title_en}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div dangerouslySetInnerHTML={{__html:i18n.language === "fa" ? data?.content_fa as string : data?.content_en as string}} className="!text-neutral-500 font-medium leading-10" />
    </div>
  );
};

export default SinglePost;
