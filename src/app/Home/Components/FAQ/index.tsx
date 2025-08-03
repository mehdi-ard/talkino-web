import { IconlyStar } from "@/components";
import Particles from "@/components/Animation/Particles";
import { Collapse, Typography, type CollapseProps } from "antd";
import type { FC } from "react";

const text = `
 Talkino is an innovative online meeting platform designed to enhance collaboration and communication. It offers features like video conferencing, screen sharing, and real-time chat, making it easy for teams to connect regardless of their location. With a user-friendly interface and robust security measures, Talkino ensures a seamless virtual meeting experience for all participants.
`;

export const FAQ: FC = () => {
  const getItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is Talkino?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] border border-[#E9E9E9] mb-8 !rounded-lg",
    },
    {
      key: "2",
      label: "Can I use Talkino without installing any software?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] border border-[#E9E9E9] mb-8 !rounded-lg",
    },
    {
      key: "3",
      label:
        "What makes Talkino different from other video conferencing tools?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] border border-[#E9E9E9] mb-8 !rounded-lg",
    },
    {
      key: "4",
      label: "Does Meet.Line work on mobile devices?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] border border-[#E9E9E9] mb-8 !rounded-lg",
    },
    {
      key: "5",
      label: "What kind of customer support does Meet.Line provide?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] border border-[#E9E9E9] mb-8 !rounded-lg",
    },
    {
      key: "6",
      label: "Is there a free version of Meet.Line?",
      children: <p>{text}</p>,
      className: "bg-[#FDFDFD] !border !border-[#E9E9E9] mb-8 !rounded-lg",
    },
  ];

  return (
    <div className="py-20 relative">
      <div className="flex flex-col justify-center items-center gap-2 w-5/12 m-auto mb-20 relative z-10">
        <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-8 bg-[#FDFDFD] border-1 border-[#E9E9E9] my-8 w-44">
          <IconlyStar color="#0065FD" />
          <span className="text-[#0065FD]">Ask Talkino</span>
          <IconlyStar color="#0065FD" />
        </div>

        <div className="flex flex-col items-center gap-2 w-6/12">
          <Typography.Title level={1} className="text-center !leading-16">
            Frequently Asked Questions
          </Typography.Title>
        </div>
      </div>

      <div className="w-6/12 flex flex-col items-end gap-2 m-auto relative z-10">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          //   expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          items={getItems}
          className="w-full !bg-transparent"
        />
      </div>

      <div className="absolute top-0 right-0 z-0 w-full h-full">
        <Particles
          particleColors={["#E9E9E9", "#E9E9E9"]}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
};
