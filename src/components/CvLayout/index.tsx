import { ReactNode } from "react";
import { EditLayoutControls } from "../Edit/EditLayoutControls";

export interface CvLayoutProps {
  children: ReactNode;
  onEditLayout: () => void;
  onAddSection: () => void;
}

export function CvLayout({
  children,
  onEditLayout,
  onAddSection,
}: CvLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 divide-y divide-solid max-w-5xl ml-auto mr-auto">
      {children}
      <EditLayoutControls
        onEditLayout={onEditLayout}
        onAddSection={onAddSection}
      />
    </main>
  );
}
