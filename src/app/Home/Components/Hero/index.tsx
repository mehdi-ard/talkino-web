import MockUp from "@/assets/image/metting-illustration.png";
import img1 from "@/assets/image/Cursor (1).svg";
import img2 from "@/assets/image/Cursor (2).svg";
import img3 from "@/assets/image/Cursor.svg";
import { BlurText, IconlyFlash } from "@/components";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Hero: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center items-center flex-wrap relative p-4">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center px-2 py-2 rounded-lg gap-2 mt-10 bg-[#FDFDFD] border-1 border-[#E9E9E9]">
        <IconlyFlash color="#0065FD" />
        <span className="!text-[#0065FD]">{t("landing.topBussiness")}</span>
      </div>
      </div>

     <div className="flex gap-3">
       <div className="w-7/12 relative"> 
        <div className="mt-20 flex flex-col items-center gap-2 ">
          <BlurText
            text="Meet. Talk. Chat. Down."
            delay={200}
            animateBy="words"
            direction="top"
            className="!text-6xl text-center font-bold"
            
          />
          <Typography.Text className="!text-3xl font-bold mt-10 text-center">
            {t("landing.oneApp")}
          </Typography.Text>
        </div>

        <div className="mt-10 gap-3 flex justify-center">
          <Button size="large">{t("landing.getStarted")}</Button>
          <Button size="large" type="text">{t("landing.exploreTalkino")}</Button>
        </div>


         <div className="absolute top-7/12 right-2/12 z-0">
          <motion.div
            initial={{ y: -30, x: -10 }}
            animate={{ y: 0, x: 10 }}
            exit={{ y: -20, x: -10 }}
            transition={{
              duration: 0.5,
              type: "keyframes",
              bounce: 0.5,
            }}
            className="drop-shadow-lg animate-none"
          >
            <img src={img1} alt="" />
          </motion.div>
        </div>
        <div className="absolute top-3/12 right-1/12 m-auto z-0">
          <motion.div
            initial={{ y: 30, x: 30 }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: 30, x: 30 }}
            transition={{
              duration: 1,
              type: "keyframes",
              bounce: 1,
            }}
            className="drop-shadow-lg animate-none"
          >
            <img src={img2} alt="" />
          </motion.div>
        </div>
        <div className="absolute top-6/12 left-0 z-0">
          <motion.div
            initial={{ y: 30, x: 10 }}
            animate={{ y: 0, x: 10 }}
            exit={{ y: 20, x: 10 }}
            transition={{
              duration: 1,
              type: "keyframes",
              bounce: 1,
            }}
            className="drop-shadow-lg animate-none"
          >
            <img src={img3} alt="" />
          </motion.div>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <img src={MockUp} alt="" className="w-full" />
        </div>

       
      </div>
     </div>
    </section>
  );
};
