import ArrowUp from "@/assets/lottie/Up.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { ConfigProvider, FloatButton, Spin, theme } from "antd";
import { colorify } from "lottie-colorify";
import { Suspense, useEffect, useRef } from "react";
import { useRoutes } from "react-router-dom";
import { Content, Footer, Header } from "./components";
import router from "./routers";
import { useTranslation } from "react-i18next";
import fa_IR from "antd/es/locale/fa_IR";
import en_US from "antd/es/locale/en_US";

const { defaultAlgorithm } = theme;

function App() {
  const renderRoutes = useRoutes(router);
  const playerRefs = useRef<Player | null>(null);
  const {i18n}  = useTranslation()

  useEffect(()=>{
    document.body.dir = i18n.dir();
  },[])

  return (
    <ConfigProvider
      prefixCls="talkino"
      direction={i18n.dir()}
      locale={i18n.language === "fa" ? fa_IR : en_US}
      theme={{
        algorithm: defaultAlgorithm,
        components:{
          Typography:{
            fontFamily:i18n.language === "fa" ? "Vazirmatn" : "Satoshi",
          }
        },
        token: {
          fontFamily: i18n.language === "fa" ? "Vazirmatn" : "Satoshi",
        },
      }}
    >
      <div className="bg-[#F3F4F6] min-h-screen flex flex-col justify-between">
        <Header />
        <Content>
          <Suspense fallback={<Spin fullscreen />}>{renderRoutes}</Suspense>
        </Content>
        <Footer />
        <FloatButton.BackTop
          onMouseEnter={() => playerRefs.current?.play()}
          onMouseLeave={() => playerRefs.current?.stop()}
          className="[&_.talkino-float-btn-content]:flex 
                [&_.talkino-float-btn-content]:justify-center 
                [&_.talkino-float-btn-content]:items-center 
                [&_.talkino-float-btn-content]:w-full
                [&_.talkino-float-btn-icon]:!w-full
                "
          icon={
            <Player
              src={colorify(["#000000", "#000000", "#000000"], ArrowUp)}
              ref={playerRefs}
              className="h-full w-5"
              autoplay={false}
              loop
              renderer="svg"
            />
          }
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
