import { useGetSocial } from "@/core";
import { getCurrentYear } from "@/helper";
import type { Social } from "@/types";
import type { FC } from "react";
import { Trans, useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t, i18n } = useTranslation();
  const { data } = useGetSocial();

  return (
    <footer className="sm:px-20 px-16 bg-[#2B2B2B] py-3">
      <div className="flex justify-between">
        <div>
          <span className="text-neutral-500 text-sm">
            <Trans
              i18nKey="layout.footer.copyright"
              values={{ year: getCurrentYear(i18n.language) }}
              components={{
                span: (
                  <span className="text-neutral-500 font-bold" />
                ),
              }}
            />
          </span>
        </div>
        <div>
          <ul className="flex gap-3">
            {data?.map((item: Social) => (
              <li>
                <a href={item.link}>
                  <img
                    src={import.meta.env.VITE_APP_API_URL + "/" + item.iconDark}
                    alt={item.socialMedia}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sm:w-6/12 w-full mt-10 pb-10">
        <span className="text-neutral-500 text-sm">
          {t("layout.footer.copyrightContent")}
        </span>
      </div>
    </footer>
  );
};
