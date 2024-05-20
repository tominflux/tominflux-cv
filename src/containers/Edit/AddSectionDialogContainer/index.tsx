import { AddSectionDialog } from "@/components/Edit/AddSectionDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { createStarterSection } from "@/utils/create/createStarterSection";

export function AddSectionDialogContainer() {
  const { addSection } = useCvStore();
  const { isAddSectionDialogOpen, closeAddSectionDialog } = useUiStore();

  const onCancel = () => {
    closeAddSectionDialog();
  };

  const onConfirm = (selectedKey: string | undefined) => {
    if (selectedKey === undefined) return;
    const sectionType = selectedKey as CvDocumentSection["type"];
    addSection(createStarterSection(sectionType));
    closeAddSectionDialog();
  };

  return (
    <AddSectionDialog
      isOpen={isAddSectionDialogOpen}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}
