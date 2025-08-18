import { useGetSocial } from "@/core";
import type { Social } from "@/types/landing";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetSocial();

  return (
    <div className="px-20 bg-[#2B2B2B] py-3">
      <div className="flex justify-between">
        <div>
          <span className="text-neutral-500 text-sm">
            {t("layout.footer.copyright")}
          </span>
        </div>
        <div>
          <ul className="flex gap-3">
            {data?.map((item: Social) => (
              <li>
                <a href={item.link}>
                  <img
                    src={
                      import.meta.env.VITE_APP_API_URL + "/" + item.iconDark
                    }
                    alt={item.socialMedia}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-6/12 mt-10 pb-10">
        <span className="text-neutral-500 text-sm">
          {t("layout.footer.copyrightContent")}
        </span>
      </div>
    </div>
  );
};
