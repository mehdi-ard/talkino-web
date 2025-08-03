import type { FC } from "react";

type IconlyIconProps = {
  size?: number;
  color?: string;
};

export const IconlyStar: FC<IconlyIconProps> = ({
  size = 24,
  color = "#000000",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9732 3C13.2857 7.31246 16.6605 10.6874 20.9728 12C16.6605 13.3126 13.2857 16.6875 11.9732 21C10.6607 16.6875 7.28588 13.3126 2.97363 12C7.28588 10.6874 10.6607 7.31246 11.9732 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
