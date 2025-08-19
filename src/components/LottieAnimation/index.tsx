import lottie from "lottie-web";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

interface LottieAnimationProps {
  animationData: any;
  autoplay?: boolean;
  loop?: boolean;
}

export interface LottieAnimationHandle {
  play: () => void;
  pause: () => void;
  stop: () => void;
}

export const LottieAnimation = forwardRef<
  LottieAnimationHandle,
  LottieAnimationProps
>(({ animationData, autoplay = false, loop = true }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });

    animationRef.current = instance;

    return () => instance.destroy();
  }, [animationData, autoplay, loop]);

  // expose play/pause/stop methods via forwardRef
  useImperativeHandle(ref, () => ({
    play: () => animationRef.current?.play(),
    pause: () => animationRef.current?.pause(),
    stop: () => animationRef.current?.stop(),
  }));

  return <div className="w-full h-full" ref={containerRef} />;
});

LottieAnimation.displayName = "LottieAnimation";
