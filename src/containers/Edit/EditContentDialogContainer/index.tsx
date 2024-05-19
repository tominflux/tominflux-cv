import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useMemo } from "react";
import { EditContentListDialogContainer } from "./EditContentListDialogContainer";

export function EditContentDialogContainer() {
  const { cv } = useCvStore();
  const { editSectionDialog, editContentDialog } = useUiStore();

  const section = useMemo(() => {
    if (editSectionDialog === undefined) return undefined;
    const section = cv?.sections.find(
      (section) => section.id === editSectionDialog
    );
    return section;
  }, [cv?.sections, editSectionDialog]);

  const content = useMemo(() => {
    if (!section || section.type !== "standard") return;
    if (!editContentDialog) return;
    const content = section.content.find(
      (content) => content.id === editContentDialog
    );
    return content;
  }, [editContentDialog, section]);

  if (!content) return <></>;
  switch (content.type) {
    case "list":
      return <EditContentListDialogContainer />;
    default:
      return <></>;
  }
}
