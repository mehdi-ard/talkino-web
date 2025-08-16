import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Nav: FC = () => {
  const {t}=useTranslation()
  const menuItems = [
    {
      name: t('layout.header.home'),
      path: "/",
    },
    {
      name: t('layout.header.about'),
      path: "/about",
    },
    {
      name: t('layout.header.contact'),
      path: "/contact",
    },
    {
      name: t('layout.header.blog'),
      path: "/blog",
    },
    {
      name: t('layout.header.faq'),
      path: "/faq",
    },
  ];
  return (
    <ul className="flex gap-2">
      {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item?.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "!text-gray-600 hover:text-primary"
                : isActive
                ? "!text-gray-300"
                : "!text-gray-400 hover:!text-gray-300 transition-all "
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
