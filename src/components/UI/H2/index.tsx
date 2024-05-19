import { ReactNode } from "react";

export interface H2Interface {
  children: ReactNode;
}

export function H2({ children }: H2Interface) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
      {children}
    </h2>
  );
}
