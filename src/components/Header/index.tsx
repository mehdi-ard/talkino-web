import { useAuth } from "@/hooks";
import { Button, Select } from "antd";
import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";
import GlassSurface from "../Animation/GlassSurface";
import { Nav } from "../Nav";
import Logo from "@/assets/image/talkino-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Header: FC = () => {
  const { accessToken } = useAuth();
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language);
  }, []);

  const handelGoToMeet = () => {
    window.location.href = "https://app.talkino.app";
  };

  const langList = [
    {
      value: "en",
      label: "English 🇺🇸",
      flag:"🇺🇸"
    },
    {
      value: "fa",
      label: "فارسی 🇮🇷",
      flag:'🇮🇷'
    },
  ];
    const mobileLangList = [
    {
      value: "en",
      label:"🇺🇸"
    },
    {
      value: "fa",
      label:'🇮🇷'
    },
  ];

  const handleLangChange = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
    document.body.dir = i18n.dir();
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
      mixBlendMode="color"
      className="w-full !sticky top-0 z-20 shadow-none"
    >
      <div className="flex justify-between items-center sm:h-20 px-4 rounded-t-lg w-full sm:flex-row flex-row-reverse">
        <div className="sm:w-4/12 h-full flex items-center relative z-[200]">
         <Select
            className="sm:!hidden !block"
            variant="borderless"
            options={mobileLangList}
            optionLabelProp="label"
            onSelect={handleLangChange}
            value={lang}
          />
          <Link
            to="/"
            className="flex items-center space-x-2 !text-gray-400 gap-2"
          >
            <img src={Logo} alt="tabora" className="h-8 w-8 flex-shrink-0" />
           <span className="sm:flex hidden">Talkino</span>
          </Link>
         
        </div>

        <Nav />

        <div className="sm:flex h-full items-center sm:gap-2 sm:w-4/12 hidden">
          <Select
            className="w-28"
            variant="borderless"
            options={langList}
            optionLabelProp="label"
            onSelect={handleLangChange}
            value={lang}
          />
          {!accessToken ? (
            <>
              <Button size="large" onClick={handelGoToMeet} type="text">
                {t("landing.signIn")}
              </Button>
              <Button size="large" type="primary" onClick={handelGoToMeet}>
                {t("landing.tryForFree")}
              </Button>
            </>
          ) : (
            <Button size="large" onClick={handelGoToMeet}>
              {t("landing.profile")}
            </Button>
          )}
        </div>
      </div>
    </GlassSurface>
  );
};
