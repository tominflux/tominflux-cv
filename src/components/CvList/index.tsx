import { ReactNode } from "react";
import { CvHeading, CvHeadingProps } from "../CvHeading";
import { ListType } from "@/types/ListType";

export interface CvListProps {
  type?: ListType;
  margin?: number;
  heading?: ReactNode;
  headingProps?: Omit<CvHeadingProps, "children">;
  items: ReactNode[];
}

export function CvList({
  type = "disc",
  margin = 3,
  heading,
  headingProps = {
    type: "h3",
    size: "xl",
    margin: 1,
  },
  items,
}: CvListProps) {
  return (
    <div className={`mb-${margin}`}>
      {heading ? <CvHeading {...headingProps}>{heading}</CvHeading> : undefined}
      <ul className={`list-${type} pl-6`}>
        {items.map((item) => (
          <li className="pl-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
