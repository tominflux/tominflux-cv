import clsx from "clsx";
import { ReactNode } from "react";

export interface DialogProps {
  children: ReactNode;
  className?: string;
}

export function Dialog({ children, className }: DialogProps) {
  return (
    <div
      className={clsx(
        "flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
}
