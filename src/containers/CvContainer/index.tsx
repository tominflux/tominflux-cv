"use client";

import { CvLayout } from "@/components/CvLayout";
import { CvSectionContainer } from "../CvSectionContainer";
import { useCvStore } from "@/state/CvStore";
import { useCvFetcher } from "@/hooks/useCvFetcher";
import { useCvUpdater } from "@/hooks/useCvUpdater";
import { EditSectionDialogContainer } from "../Edit/EditSectionDialogContainer";
import { EditContentDialogContainer } from "../Edit/EditContentDialogContainer";
import { AddSectionDialogContainer } from "../Edit/AddSectionDialogContainer";
import { AddSectionButtonContainer } from "../Edit/AddSectionButtonContainer";

export interface CvContainerProps {}

export function CvContainer({}: CvContainerProps) {
  const { cv } = useCvStore();

  useCvFetcher();
  useCvUpdater();

  return (
    <>
      <CvLayout>
        {cv
          ? cv.sections.map((sectionProps) => (
              <CvSectionContainer key={sectionProps.id} {...sectionProps} />
            ))
          : undefined}
        <AddSectionButtonContainer />
      </CvLayout>
      <EditSectionDialogContainer />
      <AddSectionDialogContainer />
      <EditContentDialogContainer />
    </>
  );
}
