import { EditContentListDialog } from "@/components/Edit/EditContentDialog/EditContentListDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { useCallback, useEffect, useMemo, useState } from "react";

export function EditContentListDialogContainer() {
  const { cv, updateContent } = useCvStore();
  const { editSectionDialog, editContentDialog, closeContentDialog } =
    useUiStore();

  const section = useMemo(() => {
    if (editSectionDialog === undefined) return undefined;
    const section = cv?.sections.find(
      (section) => section.id === editSectionDialog
    );
    if (!section || section.type !== "standard") return undefined;
    return section;
  }, [cv?.sections, editSectionDialog]);

  const content = useMemo(() => {
    if (!editContentDialog) return undefined;
    if (!section) return undefined;
    const contentItem = section.content.find(
      (contentItem) => contentItem.id === editContentDialog
    );
    if (contentItem?.type !== "list") return undefined;
    return contentItem;
  }, [editContentDialog, section]);

  const [editHeadingValue, setEditHeadingValue] = useState<string>(
    content?.heading ?? ""
  );

  const [itemOrder, setItemOrder] = useState<string[]>([]);
  useEffect(() => {
    if (!content) return;
    setItemOrder(content.items.map((item) => item.id));
  }, [content]);
  const arrangeableListItems = useMemo(() => {
    if (!content) return [];
    return content.items.map((item) => ({
      id: item.id,
      icon: <></>,
      label: item.value,
      onEdit: () => {},
      onDelete: () => {},
    }));
  }, [content]);

  const onConfirm = useCallback(() => {
    closeContentDialog();
    if (!section) return;
    if (!content) return;
    updateContent(section.id, {
      ...content,
      heading: editHeadingValue,
      items: itemOrder.map(
        (itemId) =>
          content.items.find((item) => item.id === itemId) as {
            id: string;
            value: string;
          }
      ),
    });
  }, [
    closeContentDialog,
    content,
    editHeadingValue,
    itemOrder,
    section,
    updateContent,
  ]);

  return (
    <EditContentListDialog
      isOpen={editContentDialog !== undefined}
      headingInputValue={editHeadingValue}
      onHeadingInputChange={(value) => setEditHeadingValue(value)}
      items={arrangeableListItems}
      itemOrder={itemOrder}
      onItemOrderChange={(itemOrder) => setItemOrder(itemOrder)}
      onConfirm={onConfirm}
    />
  );
}
