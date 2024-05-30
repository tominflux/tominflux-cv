import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonLightProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ButtonLight({
  children,
  onClick,
  className,
}: ButtonLightProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "px-1 py-1 font-semibold rounded shadow shadow-slate-500",
        "hover:shadow-md hover:shadow-slate-500",
        "dark:bg-gray-50 dark:text-gray-800",
        className
      )}
    >
      {children}
    </button>
  );
}
