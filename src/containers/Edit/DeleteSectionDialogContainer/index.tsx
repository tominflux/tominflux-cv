import ConfirmationDialog from "@/components/UI/ConfirmationDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";

export function DeleteSectionDialogContainer() {
  const { deleteSection } = useCvStore();
  const { deleteSectionDialog, closeDeleteSectionDialog } = useUiStore();

  const onCancel = () => {
    closeDeleteSectionDialog();
  };

  const onConfirm = () => {
    if (deleteSectionDialog === undefined) return;
    console.log("DELETE", { deleteSectionDialog });
    deleteSection(deleteSectionDialog);
    closeDeleteSectionDialog();
  };

  return (
    <ConfirmationDialog
      isOpen={deleteSectionDialog !== undefined}
      heading="Delete Section"
      subheading="Are you sure you want to delete this Section?"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}
