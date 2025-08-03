import React, { type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const HeadPage: FC<any> = ({
  title,
  description,
  contentItem,
}): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      {
        //@ts-ignore
        <Helmet>
          <title>{`${t("common.title")} | ${t(title)}`}</title>
          {description && !contentItem && (
            <meta name="description" content={description} />
          )}
          {contentItem && [
            <meta
              key="description"
              name="description"
              content={contentItem.summary}
            />,
            <meta
              key="og:description"
              property="og:description"
              content={contentItem.summary}
            />,
            <meta
              key="og:image"
              property="og:image"
              content={contentItem.smallIconUrl}
            />,
            <meta
              key="og:title"
              property="og:title"
              content={contentItem.title}
            />,
            <meta key="og:type" property="og:type" content="website" />,
          ]}
        </Helmet>
      }
    </>
  );
};

export default HeadPage;
