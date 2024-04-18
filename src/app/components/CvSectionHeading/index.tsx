import { TextSize } from "@/app/types/TextSize";
import { ReactNode } from "react";
import { CvHeading } from "../CvHeading";

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
  return (
    <CvHeading type="h2" margin={margin} size={size}>
      {children}
    </CvHeading>
  );
}
