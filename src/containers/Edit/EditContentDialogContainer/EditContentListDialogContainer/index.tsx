import { EditContentListDialog } from "@/components/Edit/EditContentDialog/EditContentListDialog";
import { EditTextFieldDialogProps } from "@/components/Edit/EditTextFieldDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { replaceIdElement } from "@/utils/replaceIdElement";
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
  const [editingTextField, setEditingTextField] = useState<string | undefined>(
    undefined
  );

  const arrangeableListItems = useMemo(() => {
    if (!content) return [];
    return content.items.map((item) => ({
      id: item.id,
      icon: <></>,
      label: item.value,
      onEdit: () => setEditingTextField(item.id),
      onDelete: () => {},
    }));
  }, [content]);

  const onHeadingInputApply = useCallback(
    (newValue: string) => {
      if (!section) return;
      if (!content) return;
      updateContent(section.id, {
        ...content,
        heading: newValue,
      });
    },
    [content, section, updateContent]
  );

  const onItemOrderChange = useCallback(
    (newItemOrder: string[]) => {
      if (!section) return;
      if (!content) return;
      updateContent(section.id, {
        ...content,
        items: newItemOrder.map(
          (itemId) =>
            content.items.find((item) => item.id === itemId) as {
              id: string;
              value: string;
            }
        ),
      });
    },
    [content, section, updateContent]
  );

  const onConfirm = useCallback(() => {
    closeContentDialog();
  }, [closeContentDialog]);

  const editTextFieldDialog: EditTextFieldDialogProps | undefined =
    useMemo(() => {
      if (!editingTextField) return undefined;
      if (!section) return;
      if (!content) return undefined;
      const item = content.items.find((item) => item.id === editingTextField);
      if (!item) return undefined;
      return {
        isOpen: true,
        heading: "Edit List Item",
        value: item.value,
        onConfirm: (value) => {
          updateContent(section.id, {
            ...content,
            items: replaceIdElement(content.items, {
              ...item,
              value,
            }),
          });
          setEditingTextField(undefined);
        },
      };
    }, [content, editingTextField, section, updateContent]);

  return (
    <EditContentListDialog
      isOpen={editContentDialog !== undefined}
      headingInputValue={editHeadingValue}
      onHeadingInputChange={(value) => setEditHeadingValue(value)}
      onHeadingInputApply={onHeadingInputApply}
      items={arrangeableListItems}
      itemOrder={content ? content.items.map((item) => item.id) : []}
      onItemOrderChange={onItemOrderChange}
      onConfirm={onConfirm}
      editTextFieldDialog={editTextFieldDialog}
    />
  );
}
