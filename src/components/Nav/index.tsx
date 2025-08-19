import type { FC } from "react";
import { useTranslation } from "react-i18next";
import PillNav from "../Animation/PillNav";
import { useLocation } from "react-router-dom";

export const Nav: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  console.log(location);

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
    {
      label: t("layout.header.blog"),
      href: "/blog",
    },
    {
      label: t("layout.header.faq"),
      href: "/faq",
    },
    {
      label: t("layout.header.pricing"),
      href: "/pricing",
    },
  ];
  return (
    // <ul className="flex gap-8 w-full justify-center">
    //   {menuItems.map((item, index) => (
    //     <li key={index}>
    //       <NavLink
    //         to={item?.href}
    //         className={({ isActive, isPending }) =>
    //           isPending
    //             ? "!text-gray-400 hover:text-primary"
    //             : isActive
    //             ? "!text-gray-500 border-b border-b-neutral-500 py-2"
    //             : "!text-gray-800 hover:!text-gray-300 transition-all py-2"
    //         }
    //       >
    //         {item.label}
    //       </NavLink>
    //     </li>
    //   ))}
    // </ul>

    <div className="flex gap-8 sm:w-full w-0.5 justify-center">
      <PillNav
        logoAlt="Company Logo"
        initialLoadAnimation={false}
        items={menuItems}
        activeHref={pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#fff"
        pillColor="#000"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
};
