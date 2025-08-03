import type { FC } from "react";

type IconlyIconProps = {
  size?: number;
  color?: string;
};

export const IconlyFlash: FC<IconlyIconProps> = ({
  size = 24,
  color = "#000000",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3066 3.54912L4.61163 12.7709C4.13391 13.4286 4.60385 14.35 5.41627 14.35H10.8931V20.1401C10.8931 21.1033 12.1278 21.5051 12.694 20.7238L19.389 11.5031C19.8667 10.8454 19.3968 9.92299 18.5843 9.92299H13.1066V4.13387C13.1066 3.16967 11.8728 2.76881 11.3066 3.54912Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
