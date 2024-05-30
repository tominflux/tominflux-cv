import { EditMetaDataDialog } from "@/components/Edit/EditMetaDataDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useCallback, useState } from "react";

export function EditMetaDataDialogContainer() {
  const { cv, updateMetaData } = useCvStore();
  const { isEditMetaDataDialogOpen, closeEditMetaDataDialog } = useUiStore();

  const metadata = cv?.metadata;

  const [editNameValue, setEditNameValue] = useState<string>(
    metadata?.name ?? ""
  );

  const onApplyValue = useCallback(
    (key: "name", value: string) => {
      if (!metadata) return;
      updateMetaData({
        ...metadata,
        [key]: value,
      });
    },
    [metadata, updateMetaData]
  );

  console.log("DEBUG", { isEditMetaDataDialogOpen });

  return (
    <EditMetaDataDialog
      isOpen={isEditMetaDataDialogOpen}
      nameInputValue={editNameValue}
      onNameInputChange={(value) => setEditNameValue(value)}
      onNameInputApply={(value) => onApplyValue("name", value)}
      onConfirm={() => closeEditMetaDataDialog()}
    />
  );
}
