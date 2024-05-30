import { ReactNode } from "react";

export interface ControlBarProps {
  children: ReactNode;
}

export function ControlBar({ children }: ControlBarProps) {
  return (
    <div className="fixed top-0 left-0 w-full flex flow row justify-between items-center gap-4 px-6 py-4 dark:bg-gray-800 dark:text-gray-100">
      {children}
    </div>
  );
}
