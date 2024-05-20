import { AddContentDialog } from "@/components/Edit/AddContentDialog";
import { contentSupportedSectionTypes } from "@/constants/cvSection";
import { useCvStore } from "@/state/CvStore";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { createStarterContent } from "@/utils/create/createStarterContent";
import { getContentSupportingSection } from "@/utils/getContentSupportingSection";
import { useMemo } from "react";

export interface AddContentDialogContainerProps {
  isOpen: boolean;
  sectionId: string;
  onClose: () => void;
}

export function AddContentDialogContainer({
  isOpen,
  sectionId,
  onClose,
}: AddContentDialogContainerProps) {
  const { cv, updateSection } = useCvStore();

  const section = useMemo(() => {
    if (!cv) return undefined;
    const matchingSection = cv.sections.find(
      (section) => section.id === sectionId
    );
    if (!matchingSection) return undefined;
    const contentSupportingSection =
      getContentSupportingSection(matchingSection);
    return contentSupportingSection;
  }, [cv, sectionId]);

  const onConfirm = (selectedKey: string | undefined) => {
    if (!selectedKey) return;
    if (!section) return;
    const contentType = selectedKey as CvDocumentContent["type"];
    const newContent = createStarterContent(contentType);
    updateSection({
      ...section,
      content: [...section.content, newContent],
    });
    onClose();
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <AddContentDialog
      isOpen={isOpen}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
