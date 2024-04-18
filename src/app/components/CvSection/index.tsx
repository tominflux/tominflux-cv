import { ReactNode } from "react";

export interface CvSectionProps {
  margin?: number;
  children: ReactNode;
}

export function CvSection({ margin = 2, children }: CvSectionProps) {
  return <div className={`w-full mb-${margin}`}>{children}</div>;
}
