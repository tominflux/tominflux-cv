import { ReactNode } from "react";

export interface CvLayoutProps {
  children: ReactNode;
}

export function CvLayout({ children }: CvLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 divide-y divide-solid max-w-5xl ml-auto mr-auto">
      {children}
    </main>
  );
}
