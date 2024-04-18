import { HeadingType } from "@/types/HeadingType";
import { TextSize } from "@/types/TextSize";
import React from "react";
import { ReactNode } from "react";

export interface CvHeadingProps {
  type: HeadingType;
  margin?: number;
  size?: TextSize;
  children: ReactNode;
}

export function CvHeading({
  type,
  margin = 2,
  size = "3xl",
  children,
}: CvHeadingProps) {
  return React.createElement(type, {
    className: `text-${size} mb-${margin}`,
    children,
  });
}
