import { IconlyStar } from "@/components";
import { Button, Typography } from "antd";
import type { FC } from "react";

export const Testimonials: FC = () => {
  const data = [
    {
      name: "Mike Johnson",
      position: "CEO of Amaton",
      comment:
        "“We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meet.line yet!”",
      avatar: "",
    },
    {
      name: "Nata Kira",
      position: "CTO of NexGen",
      comment:
        "“We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meet.line yet!”",
      avatar: "",
    },
    {
      name: "Jack Kalaguna",
      position: "CEO of Arasaka",
      comment:
        "“We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meet.line yet!”",
      avatar: "",
    },
    {
      name: "Mika Sinta",
      position: "CPO of Micropov",
      comment:
        "“We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meet.line yet!”",
      avatar: "",
    },
    {
      name: "Rodrigo Huez",
      position: "HR of GuluKulu",
      comment:
        "“We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meet.line yet!”",
      avatar: "",
    },
  ];
  return (
    <section className="relative w-full p-4">
      <div className="flex justify-center bg-] px-2 py-2 rounded-lg gap-2 mt-10 bg-[#FDFDFD] border-1 border-[#E9E9E9] my-10 w-44">
        <IconlyStar color="#0065FD" />
        <span className="text-[#0065FD]">Testimonials</span>
        <IconlyStar color="#0065FD" />
      </div>

      <div className="w-full flex justify-between">
        <div className="w-3/12">
          <Typography.Title level={1}>What People Are Saying</Typography.Title>
        </div>
        <div className="w-4/12 flex flex-col items-end gap-2">
          <Typography.Text className="!text-[#696b6c] text-right">
            From setup to execution, Talkino delivers — here’s what people are
            saying after switching from other platforms they used before.
          </Typography.Text>
          <div>
            <Button size="large">See More</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="p-3 w-4/12 group">
            <div
              className="bg-[#FDFDFD] border border-[#E9E9E9] p-8 rounded-lg transition-all duration-300 ease-in-out
                  group-hover:bg-gradient-to-tr 
                  group-hover:from-blue-800 
                  group-hover:to-blue-600"
            >
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-amber-500 mx-3">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-black !mb-0 font-bold group-hover:text-white">
                    {item.name}
                  </p>
                  <span className="text-[#0065FD] !text-sm group-hover:text-white">
                    {item.position}
                  </span>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-2">
                <span className="text-gray-400 text-sm group-hover:text-white">
                  {item.comment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
