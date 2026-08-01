import Image from "next/image";
import type { ReactNode } from "react";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/talkino-logo.svg"
      alt="Talkino"
      width={150}
      height={41}
      priority={priority}
    />
  );
}

export function Icon({ children }: { children: ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export function Kicker({ children, cyan = false }: { children: ReactNode; cyan?: boolean }) {
  return <span className={`kicker${cyan ? " cyan" : ""}`}>{children}</span>;
}
