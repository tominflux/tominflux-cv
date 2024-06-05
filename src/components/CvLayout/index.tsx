import { ReactNode } from "react";
import { EditLayoutControls } from "../Edit/EditLayoutControls";
import clsx from "clsx";

export interface CvLayoutProps {
  children: ReactNode;
  className?: string;
  editControls?: {
    onEditLayout: () => void;
    onAddSection: () => void;
  };
  hasTopMargin?: boolean;
}

export function CvLayout({
  children,
  editControls,
  className,
  hasTopMargin,
}: CvLayoutProps) {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-start",
        "divide-y divide-solid max-w-5xl ml-auto mr-auto",
        hasTopMargin ? "mt-24" : undefined,
        className
      )}
    >
      {children}
      {editControls ? <EditLayoutControls {...editControls} /> : undefined}
    </main>
  );
}
