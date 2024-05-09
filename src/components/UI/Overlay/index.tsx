import clsx from "clsx";
import { ReactNode } from "react";

export interface OverlayProps {
  className: string;
  children: ReactNode;
  overlay: ReactNode | ReactNode[];
}

export function Overlay({ className, children, overlay }: OverlayProps) {
  const layers = Array.isArray(overlay) ? overlay : [overlay];
  return (
    <div className={clsx("relative", className)}>
      {children}
      {layers.map((layer) => (
        <div className="absolute w-full h-full left-0 top-0">{layer}</div>
      ))}
    </div>
  );
}
