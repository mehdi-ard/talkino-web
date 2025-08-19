import type { FC } from "react";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen w-full bg-[#FDFDFD] rounded-lg py-5 sm:py-0">
      {children}
    </div>
  );
};
