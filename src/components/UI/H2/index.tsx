import clsx from "clsx";
import { ReactNode } from "react";

export interface H2Interface {
  children: ReactNode;
  className?: string;
}

export function H2({ children, className }: H2Interface) {
  return (
    <h2
      className={clsx(
        "flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide",
        className
      )}
    >
      {children}
    </h2>
  );
}
