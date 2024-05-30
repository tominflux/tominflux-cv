import { EditSectionHeaderDialog } from "@/components/Edit/EditSectionDialog/EditSectionHeaderDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useCallback, useMemo, useState } from "react";

export function EditSectionHeaderDialogContainer() {
  const { cv, updateSection } = useCvStore();
  const { editSectionDialog, closeSectionDialog, editContentDialog } =
    useUiStore();

  const section = useMemo(() => {
    if (editSectionDialog === undefined) return undefined;
    const section = cv?.sections.find(
      (section) => section.id === editSectionDialog
    );
    if (!section || section.type !== "header") return undefined;
    return section;
  }, [cv?.sections, editSectionDialog]);

  const [editNameValue, setEditNameValue] = useState<string>(
    section?.name ?? ""
  );
  const [editEmailValue, setEditEmailValue] = useState<string>(
    section?.email ?? ""
  );
  const [editPhoneValue, setEditPhoneValue] = useState<string>(
    section?.phone ?? ""
  );
  const [editAddressValue, setEditAddressValue] = useState<string>(
    section?.address ?? ""
  );
  const [editLink1Value, setEditLink1Value] = useState<string>(
    section?.link1 ?? ""
  );
  const [editLink2Value, setEditLink2Value] = useState<string>(
    section?.link2 ?? ""
  );

  const onApplyValue = useCallback(
    (
      key: "name" | "email" | "phone" | "address" | "link1" | "link2",
      value: string
    ) => {
      if (!section) return;
      updateSection({
        ...section,
        [key]: value,
      });
    },
    [section, updateSection]
  );

  if (!section) return <></>;
  return (
    <EditSectionHeaderDialog
      isOpen={!editContentDialog}
      onConfirm={() => closeSectionDialog()}
      nameInputValue={editNameValue}
      onNameInputChange={(value) => setEditNameValue(value)}
      onNameInputApply={(value) => onApplyValue("name", value)}
      emailInputValue={editEmailValue}
      onEmailInputChange={(value) => setEditEmailValue(value)}
      onEmailInputApply={(value) => onApplyValue("email", value)}
      phoneInputValue={editPhoneValue}
      onPhoneInputChange={(value) => setEditPhoneValue(value)}
      onPhoneInputApply={(value) => onApplyValue("phone", value)}
      addressInputValue={editAddressValue}
      onAddressInputChange={(value) => setEditAddressValue(value)}
      onAddressInputApply={(value) => onApplyValue("address", value)}
      link1InputValue={editLink1Value}
      onLink1InputChange={(value) => setEditLink1Value(value)}
      onLink1InputApply={(value) => onApplyValue("link1", value)}
      link2InputValue={editLink2Value}
      onLink2InputChange={(value) => setEditLink2Value(value)}
      onLink2InputApply={(value) => onApplyValue("link2", value)}
    />
  );
}
