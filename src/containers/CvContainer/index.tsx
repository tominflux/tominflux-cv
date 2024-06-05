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

export interface CvContainerProps {
  isEditable?: boolean;
}

export function CvContainer({ isEditable = true }: CvContainerProps) {
  const { cv } = useCvStore();
  const { openAddSectionDialog, openEditLayoutDialog } = useUiStore();

  useCvFetcher();
  useCvUpdater();

  const editLayoutControls = isEditable
    ? {
        onEditLayout: () => openEditLayoutDialog(),
        onAddSection: () => openAddSectionDialog(),
      }
    : undefined;

  return (
    <>
      <CvLayout editControls={editLayoutControls} hasTopMargin={isEditable}>
        {cv
          ? cv.sections.map((sectionProps) => (
              <CvSectionContainer
                key={sectionProps.id}
                {...sectionProps}
                isEditable={isEditable}
              />
            ))
          : undefined}
      </CvLayout>
      {isEditable ? (
        <>
          <EditMetaDataDialogContainer />
          <EditLayoutDialogContainer />
          <EditSectionDialogContainer />
          <AddSectionDialogContainer />
          <DeleteSectionDialogContainer />
          <EditContentDialogContainer />
        </>
      ) : undefined}
    </>
  );
}
