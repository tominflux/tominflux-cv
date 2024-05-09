"use client";

import { CvLayout } from "@/components/CvLayout";
import { CvSectionContainer } from "../CvSectionContainer";
import { useCvStore } from "@/state";
import { useCvFetcher } from "@/hooks/useCvFetcher";
import { useCvUpdater } from "@/hooks/useCvUpdater";

export interface CvContainerProps {}

export function CvContainer({}: CvContainerProps) {
  const { cv } = useCvStore();

  useCvFetcher();
  useCvUpdater();

  console.log("DEBUG", cv);

  return (
    <CvLayout>
      {cv
        ? cv.sections.map((sectionProps) => (
            <CvSectionContainer key={sectionProps.id} {...sectionProps} />
          ))
        : undefined}
    </CvLayout>
  );
}
