import * as Icon from "@/components";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
    const {t}=useTranslation()
  
  return (
    <div className="px-20 bg-[#2B2B2B] py-3">
      <div className="flex justify-between">
        <div>
          <span className="text-neutral-500 text-sm">{t('layout.footer.copyright')}</span>
        </div>
        <div>
          <ul className="flex gap-3">
            <li>
              <a href="#">
                <Icon.IconlyX size={20} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.IconlyLinkedinSquare size={20} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.IconlyInstagram size={20} color="#FFFFFF" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-6/12 mt-10 pb-10">
        <span className="text-neutral-500 text-sm">
          {t('layout.footer.copyrightContent')}
        </span>
      </div>
    </div>
  );
};
