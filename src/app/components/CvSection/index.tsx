import { ReactNode } from "react";
import { CvHeading, CvHeadingProps } from "../CvHeading";

export interface CvSectionProps {
  margin?: number;
  heading?: ReactNode;
  headingProps?: Omit<CvHeadingProps, "children">;
  padding?: number;
  children: ReactNode;
}

export function CvSection({
  margin = 2,
  heading,
  headingProps = {
    type: "h2",
    size: "2xl",
    margin: 2,
  },
  padding = 3,
  children,
}: CvSectionProps) {
  return (
    <div className={`w-full mb-${margin}`}>
      {heading ? <CvHeading {...headingProps}>{heading}</CvHeading> : undefined}
      <div className={`px-${padding}`}>{children}</div>
    </div>
  );
}
