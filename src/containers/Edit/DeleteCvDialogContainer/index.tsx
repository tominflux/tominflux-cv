import ConfirmationDialog from "@/components/UI/ConfirmationDialog";
import { useUiStore } from "@/state/UiStore";

export interface DeleteCvDialogContainerProps {
  onConfirm: () => void;
}

export function DeleteCvDialogContainer({
  onConfirm: onAfterConfirm,
}: DeleteCvDialogContainerProps) {
  const { deleteCvDialog, closeDeleteCvDialog } = useUiStore();

  const onCancel = () => {
    closeDeleteCvDialog();
  };

  const onConfirm = () => {
    fetch(`/api/cv/${deleteCvDialog}`, {
      method: "DELETE",
    });
    onAfterConfirm();
    closeDeleteCvDialog();
  };

  return (
    <ConfirmationDialog
      isOpen={deleteCvDialog !== undefined}
      heading="Delete CV"
      subheading="Are you sure you want to delete this CV?"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
}
