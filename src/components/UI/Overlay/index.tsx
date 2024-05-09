import clsx from "clsx";
import { ReactNode } from "react";

export interface OverlayProps {
  className?: string;
  children: ReactNode;
  overlay: ReactNode | ReactNode[];
  renderOverlay?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Overlay({
  className,
  children,
  overlay,
  renderOverlay = true,
  onMouseEnter,
  onMouseLeave,
}: OverlayProps) {
  const layers = Array.isArray(overlay) ? overlay : [overlay];

  return (
    <div
      className={clsx("relative", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {renderOverlay
        ? layers.map((layer) => (
            <div className="absolute w-full h-full left-0 top-0 pointer-events-none">
              {layer}
            </div>
          ))
        : undefined}
    </div>
  );
}
