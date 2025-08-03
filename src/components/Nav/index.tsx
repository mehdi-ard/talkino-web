import type { FC } from "react";
import { NavLink } from "react-router-dom";

export const Nav: FC = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "FAQ",
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
