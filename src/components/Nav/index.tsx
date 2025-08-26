import type { FC } from "react";
import { useTranslation } from "react-i18next";
import PillNav from "../Animation/PillNav";
import { useLocation } from "react-router-dom";

export const Nav: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const menuItems = [
    {
      label: t("layout.header.home"),
      href: "/",
    },
    {
      label: t("layout.header.about"),
      href: "/about",
    },
    {
      label: t("layout.header.contact"),
      href: "/contact",
    },
    // {
    //   label: t("layout.header.blog"),
    //   href: "/blog",
    // },
    {
      label: t("layout.header.faq"),
      href: "/faq",
    },
    // {
    //   label: t("layout.header.pricing"),
    //   href: "/pricing",
    // },
  ];
  return (
    <div className="flex gap-8 sm:w-full w-0.5 justify-center c">
      <PillNav
        logoAlt="Company Logo"
        initialLoadAnimation={false}
        items={menuItems}
        activeHref={pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#00b8db"
        pillColor="#000000"
        hoveredPillTextColor="#fff"
        pillTextColor="#000000"
        
      />
    </div>
  );
};
