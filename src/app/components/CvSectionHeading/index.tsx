import { TextSize } from "@/app/types/TextSize";
import { ReactNode } from "react";

export interface CvSectionHeadingProps {
  margin?: number;
  size?: TextSize;
  children: ReactNode;
}

export function CvSectionHeading({
  margin = 1,
  size = "2xl",
  children,
}: CvSectionHeadingProps) {
  return <h2 className={`text-${size} mb-${margin}`}>{children}</h2>;
}
