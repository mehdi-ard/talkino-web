
import { Container } from "@/components";
import { useGetPageSlug } from "@/core";
import { Spin } from "antd";
import { useEffect, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SinglePage: FC = () => {
  const { slug } = useParams();
  const { data, isPending } = useGetPageSlug(slug as string);
  const { i18n } = useTranslation();
  const [pageData, setPageData] = useState<string>("");

  useEffect(() => {
    if (data) {
      setPageData(i18n.language === "fa" ? data.contentFa : data.contentEn);
      window.scrollTo(0, 0);
    }
  }, [data]);

  return (
    <Spin spinning={isPending}>
      <Container>
        <div className="my-10" dangerouslySetInnerHTML={{ __html: pageData }} />
      </Container>
    </Spin>
  );
};

export default SinglePage;
