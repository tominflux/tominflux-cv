import ConfirmationDialog from "@/components/UI/ConfirmationDialog";
import { useUiStore } from "@/state/UiStore";

export interface DeleteCvDialogContainerProps {
  onDeleteCv: () => void;
}

export function DeleteCvDialogContainer({
  onDeleteCv: onDeleteCv,
}: DeleteCvDialogContainerProps) {
  const { deleteCvDialog, closeDeleteCvDialog } = useUiStore();

  const onCancel = () => {
    closeDeleteCvDialog();
  };

  const deleteCv = async () => {
    await fetch(`/api/cv/${deleteCvDialog}`, {
      method: "DELETE",
    });
    onDeleteCv();
  };

  const onConfirm = () => {
    deleteCv().catch((e) => console.error(e));
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
