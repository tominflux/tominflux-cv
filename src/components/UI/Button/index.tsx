import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        `px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100`,
        className
      )}
    >
      {children}
    </button>
  );
}
