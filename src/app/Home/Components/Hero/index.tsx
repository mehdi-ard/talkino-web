import MockUp from "@/assets/image/Browser.png";
import img1 from "@/assets/image/Cursor (1).svg";
import img2 from "@/assets/image/Cursor (2).svg";
import img3 from "@/assets/image/Cursor.svg";
import { BlurText, IconlyFlash } from "@/components";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import type { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className="flex justify-center items-center flex-col relative p-4">
      <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-10 bg-[#FDFDFD] border-1 border-[#E9E9E9]">
        <IconlyFlash color="#0065FD" />
        <span className="!text-[#0065FD]">Fast Meeting Tools</span>
      </div>

      <div className="mt-20 flex flex-col items-center gap-2 w-6/12">
        <BlurText
          text="Meet. Talk. Down."
          delay={200}
          animateBy="words"
          direction="top"
          className="!text-6xl text-center font-bold"
        />
        <Typography.Text className="!text-lg mt-10 text-center">
          Initiate meetings in an instant, effortlessly share your screens, and
          collaborate effectively to achieve your goals together.
        </Typography.Text>
      </div>

      <div className="mt-10 gap-3 flex">
        <Button size="large">Get Start</Button>
        <Button size="large" type="text">
          Explore Talkino
        </Button>
      </div>

      <div className="mt-10">
        <img src={MockUp} alt="" className="w-full" />
      </div>

      <div className="absolute top-5/12 right-4/12 z-0">
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
      <div className="absolute top-2/12 right-2/12 m-auto z-0">
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
      <div className="absolute top-3/12 left-2/12 z-0">
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
    </section>
  );
};
