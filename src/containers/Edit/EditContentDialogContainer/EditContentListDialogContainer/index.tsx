import { EditContentListDialog } from "@/components/Edit/EditContentDialog/EditContentListDialog";
import { EditTextFieldDialogProps } from "@/components/Edit/EditTextFieldDialog";
import { ConfirmationDialogProps } from "@/components/UI/ConfirmationDialog";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { removeIdElement } from "@/utils/removeIdElement";
import { replaceIdElement } from "@/utils/replaceIdElement";
import { uuid } from "@/utils/uuid";
import { useCallback, useMemo, useState } from "react";

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
  const [editingItem, setEditingItem] = useState<string | undefined>(undefined);
  const [deletingItem, setDeletingItem] = useState<string | undefined>(
    undefined
  );

  const arrangeableListItems = useMemo(() => {
    if (!content) return [];
    return content.items.map((item) => ({
      id: item.id,
      icon: <></>,
      label: item.value,
      onEdit: () => setEditingItem(item.id),
      onDelete: () => setDeletingItem(item.id),
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

  const editItemDialog: EditTextFieldDialogProps | undefined = useMemo(() => {
    if (!editingItem) return undefined;
    if (!section) return;
    if (!content) return undefined;
    const item = content.items.find((item) => item.id === editingItem);
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
        setEditingItem(undefined);
      },
    };
  }, [content, editingItem, section, updateContent]);

  const deleteItemDialog: ConfirmationDialogProps | undefined = useMemo(() => {
    if (!deletingItem) return undefined;
    if (!section) return;
    if (!content) return undefined;
    return {
      isOpen: true,
      heading: "Delete List Item",
      subheading: "Are you sure you want to delete this List Item?",
      onCancel: () => setDeletingItem(undefined),
      onConfirm: () => {
        updateContent(section.id, {
          ...content,
          items: removeIdElement(content.items, deletingItem),
        });
        setDeletingItem(undefined);
      },
    };
  }, [content, deletingItem, section, updateContent]);

  const onAddItem = useCallback(() => {
    if (!section) return;
    if (!content) return undefined;
    updateContent(section.id, {
      ...content,
      items: [
        ...content.items,
        {
          id: uuid(),
          value: "Lorem ipsum",
        },
      ],
    });
  }, [content, section, updateContent]);

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
      editItemDialog={editItemDialog}
      deleteItemDialog={deleteItemDialog}
      onAddItem={onAddItem}
    />
  );
}
