import clsx from "clsx";
import { ReactNode } from "react";

export interface SelectableThumbnailProps {
  isSelected?: boolean;
  className?: string;
  children: ReactNode;
  onSelect?: () => void;
}

export function SelectableThumbnail({
  isSelected = false,
  className,
  children,
  onSelect,
}: SelectableThumbnailProps) {
  const getShadow = () => {
    switch (isSelected) {
      case true:
        return "shadow-md shadow-slate-500";
      case false:
        return "shadow shadow-slate-500";
    }
  };

  return (
    <div
      className={clsx(
        `px-3 py-3 font-semibold rounded cursor-pointer`,
        getShadow(),
        className
      )}
      onClick={onSelect ? () => onSelect() : undefined}
    >
      {children}
    </div>
  );
}
