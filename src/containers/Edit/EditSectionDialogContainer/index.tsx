import { useCvStore } from "@/state/CvStore";
import { useMemo } from "react";
import { EditSectionStandardDialogContainer } from "./EditSectionStandardDialogContainer";
import { useUiStore } from "@/state/UiStore";

export function EditSectionDialogContainer() {
  const { cv } = useCvStore();
  const { editSectionDialog } = useUiStore();

  const section = useMemo(() => {
    if (editSectionDialog === undefined) return undefined;
    const section = cv?.sections.find(
      (section) => section.id === editSectionDialog
    );
    return section;
  }, [cv?.sections, editSectionDialog]);

  if (!section) return <></>;
  switch (section.type) {
    case "standard":
      return <EditSectionStandardDialogContainer />;
    default:
      return <></>;
  }
}
