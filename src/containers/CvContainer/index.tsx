"use client";

import { CvLayout } from "@/components/CvLayout";
import { useCvFetcher } from "@/hooks/useCvFetcher";
import { useCvUpdater } from "@/hooks/useCvUpdater";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvSectionContainer } from "../CvSectionContainer";
import { AddSectionDialogContainer } from "../Edit/AddSectionDialogContainer";
import { EditContentDialogContainer } from "../Edit/EditContentDialogContainer";
import { EditLayoutDialogContainer } from "../Edit/EditLayoutDialogContainer";
import { EditSectionDialogContainer } from "../Edit/EditSectionDialogContainer";
import { DeleteSectionDialogContainer } from "../Edit/DeleteSectionDialogContainer";
import { EditMetaDataDialogContainer } from "../Edit/EditMetaDataDialogContainer";

export interface CvContainerProps {}

export function CvContainer({}: CvContainerProps) {
  const { cv } = useCvStore();
  const { openAddSectionDialog, openEditLayoutDialog } = useUiStore();

  useCvFetcher();
  useCvUpdater();

  return (
    <>
      <CvLayout
        onEditLayout={() => openEditLayoutDialog()}
        onAddSection={() => openAddSectionDialog()}
      >
        {cv
          ? cv.sections.map((sectionProps) => (
              <CvSectionContainer key={sectionProps.id} {...sectionProps} />
            ))
          : undefined}
      </CvLayout>
      <EditMetaDataDialogContainer />
      <EditLayoutDialogContainer />
      <EditSectionDialogContainer />
      <AddSectionDialogContainer />
      <DeleteSectionDialogContainer />
      <EditContentDialogContainer />
    </>
  );
}
