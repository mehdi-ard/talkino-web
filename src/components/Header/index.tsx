import { useAuth } from "@/hooks";
import { Button } from "antd";
import type { FC } from "react";
import { Link } from "react-router-dom";
import GlassSurface from "../Animation/GlassSurface";
import { Nav } from "../Nav";

export const Header: FC = () => {
  const { accessToken } = useAuth();

  const handelGoToMeet = () => {
    window.location.href = "https://meet.talkino.app";
  };

  return (
    <GlassSurface
      borderRadius={0}
      backgroundOpacity={0}
      blur={20}
      saturation={1}
      borderWidth={0}
      displace={2}
      distortionScale={-50}
      redOffset={5}
      greenOffset={15}
      blueOffset={25}
      brightness={70}
      // opacity={0.8}
      mixBlendMode="color-burn"
      className="w-full sticky top-0 z-20 shadow-none"
    >
      <div className="flex justify-between items-center h-20 px-4 rounded-t-lg w-full">
        <div>
          <Link to="/" className="flex items-center space-x-2 !text-gray-400">
            {/* <img src={Logo} alt="tabora" className="h-8 w-8" /> */}
            Talkino
          </Link>
        </div>
        <Nav />

        <div className="flex items-center gap-2">
          {!accessToken ? (
            <>
              <Button size="large" onClick={handelGoToMeet} type="text">
                Sing In
              </Button>
              <Button size="large" type="primary" onClick={handelGoToMeet}>
                Sing Up
              </Button>
            </>
          ) : (
            <Button size="large" onClick={handelGoToMeet}>
              Profile
            </Button>
          )}
        </div>
      </div>
    </GlassSurface>
  );
};
