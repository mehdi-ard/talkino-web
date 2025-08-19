import { useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import { useGetPosts } from "@/core";
import type { Post } from "@/types";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import { Divider, Empty, Typography } from "antd";
import { getConvertDate } from "@/helper";
import { isEmpty } from "ramda";

const Blog: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetPosts();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <div className="p-20 flex flex-wrap gap-2">
      {isEmpty(data) ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Empty />
        </div>
      ) : (
        data?.map((item: Post) => (
          <div
            className="w-4/12 rounded-lg p-2 flex flex-col gap-2 group"
            key={item.id}
          >
            <div className="h-80 w-full bg-gradient-to-r from-neutral-500 to-neutral-400 rounded-lg overflow-hidden">
              <Link to={`/blog/${item.id}/${item.slug}`}>
                <img
                  src={import.meta.env.VITE_APP_API_URL + "/" + item.image}
                  alt={i18n.language === "fa" ? item.title_fa : item.title_en}
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </Link>
            </div>

            <div className="h-96">
              <div className="my-2">
                <Typography.Text className="block  !text-neutral-400 font-medium">
                  {getConvertDate(
                    data?.createdAt,
                    "YYYY MMMM DD",
                    i18n.language
                  )}
                </Typography.Text>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {i18n.language === "fa" ? item.title_fa : item.title_en}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n.language === "fa"
                        ? item.content_fa.slice(0, 200) + "..."
                        : item.content_en.slice(0, 200) + "...",
                  }}
                  className="font-vazirmant h-20 py-2"
                />

                <Divider />

                <Link
                  to={`/blog/${item.id}/${item.slug}`}
                  className="text-neutral-600 hover:text-neutral-400"
                >
                  {t("common.readMore")}
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
