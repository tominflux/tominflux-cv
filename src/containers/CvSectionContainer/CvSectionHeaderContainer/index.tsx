"use client";

import {
  CvSectionHeader,
  CvSectionHeaderEditData,
} from "@/components/CvSection/CvSectionHeader";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";

export type CvSectionHeaderContainerProps = CvDocumentSectionHeader & {
  isEditable?: boolean;
};

export function CvSectionHeaderContainer({
  id,
  name,
  email,
  phone,
  address,
  link1,
  link2,
  isEditable = true,
}: CvSectionHeaderContainerProps) {
  const { openSectionDialog } = useUiStore();

  return (
    <CvSectionHeader
      id={id}
      name={name}
      email={email}
      phone={phone}
      address={address}
      link1={link1}
      link2={link2}
      onEditButtonClick={isEditable ? () => openSectionDialog(id) : undefined}
    />
  );
}
