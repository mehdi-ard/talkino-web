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
    <ul className="flex gap-8">
      {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item?.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "!text-gray-400 hover:text-primary"
                : isActive
                ? "!text-gray-500 border-b border-b-neutral-500 py-2"
                : "!text-gray-800 hover:!text-gray-300 transition-all py-2"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
