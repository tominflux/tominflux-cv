import { AddContentDialogProps } from "@/components/Edit/AddContentDialog";
import { EditSectionStandardDialog } from "@/components/Edit/EditSectionDialog/EditSectionStandardDialog";
import { ConfirmationDialogProps } from "@/components/UI/ConfirmationDialog";
import { ListIcon } from "@/components/UI/Icons/ListIcon";
import { QuestionMarkIcon } from "@/components/UI/Icons/QuestionMarkIcon";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { createStarterContent } from "@/utils/create/createStarterContent";
import { removeIdElement } from "@/utils/removeIdElement";
import { useCallback, useEffect, useMemo, useState } from "react";

export function EditSectionStandardDialogContainer() {
  const { cv, updateSection } = useCvStore();
  const {
    editSectionDialog,
    closeSectionDialog,
    editContentDialog,
    openContentDialog,
  } = useUiStore();

  const section = useMemo(() => {
    if (editSectionDialog === undefined) return undefined;
    const section = cv?.sections.find(
      (section) => section.id === editSectionDialog
    );
    if (!section || section.type !== "standard") return undefined;
    return section;
  }, [cv?.sections, editSectionDialog]);

  const [editHeadingValue, setEditHeadingValue] = useState<string>(
    section?.heading ?? ""
  );

  const getContentCapsuleIcon = (content: CvDocumentContent) => {
    switch (content.type) {
      case "list":
        return <ListIcon />;
      case "lorem":
        return <QuestionMarkIcon />;
    }
  };

  const getContentCapsuleLabel = (content: CvDocumentContent) => {
    switch (content.type) {
      case "list":
        return content.heading;
      case "lorem":
        return "Lorem Ipsum";
    }
  };

  const [contentOrder, setContentOrder] = useState<string[]>([]);
  useEffect(() => {
    if (!section) return;
    setContentOrder(section.content.map((contentItem) => contentItem.id));
  }, [section]);
  const [deletingContent, setDeletingContent] = useState<string | undefined>(
    undefined
  );
  const [addingContent, setAddingContent] = useState<boolean>(false);
  const arrangeableListItems = useMemo(() => {
    if (!section) return [];
    return section.content.map((contentItem) => ({
      id: contentItem.id,
      icon: getContentCapsuleIcon(contentItem),
      label: getContentCapsuleLabel(contentItem),
      onEdit: () => openContentDialog(contentItem.id),
      onDelete: () => {
        console.log("DELETE", { contentItem });
        setDeletingContent(contentItem.id);
      },
    }));
  }, [openContentDialog, section]);

  const onHeadingInputApply = useCallback(
    (value: string) => {
      if (!section) return;
      updateSection({
        ...section,
        heading: value,
      });
    },
    [section, updateSection]
  );

  const onContentOrderChange = useCallback(
    (newContentOrder: string[]) => {
      if (!section) return;
      updateSection({
        ...section,
        content: newContentOrder.map(
          (contentId) =>
            section.content.find(
              (contentItem) => contentItem.id === contentId
            ) as CvDocumentContent
        ),
      });
    },
    [section, updateSection]
  );

  const onConfirm = useCallback(() => {
    if (!section) return;
    updateSection({
      ...section,
      heading: editHeadingValue,
      content: contentOrder.map(
        (contentId) =>
          section.content.find(
            (contentItem) => contentItem.id === contentId
          ) as CvDocumentContent
      ),
    });
    closeSectionDialog();
  }, [
    closeSectionDialog,
    contentOrder,
    editHeadingValue,
    section,
    updateSection,
  ]);

  const deleteContentDialog: ConfirmationDialogProps | undefined =
    useMemo(() => {
      if (!deletingContent) return undefined;
      if (!section) return undefined;
      return {
        isOpen: true,
        heading: "Delete Content",
        subheading: "Are you sure you want to delete this Content?",
        onCancel: () => setDeletingContent(undefined),
        onConfirm: () => {
          updateSection({
            ...section,
            content: removeIdElement(section.content, deletingContent),
          });
          setDeletingContent(undefined);
        },
      };
    }, [deletingContent, section, updateSection]);

  const addContentDialog: AddContentDialogProps | undefined = useMemo(() => {
    if (!addingContent) return undefined;
    if (!section) return undefined;
    return {
      isOpen: true,
      onConfirm: (selectedKey) => {
        const contentType = selectedKey as CvDocumentContent["type"];
        const newContent = createStarterContent(contentType);
        updateSection({
          ...section,
          content: [...section.content, newContent],
        });
        setAddingContent(false);
      },
      onCancel: () => setAddingContent(false),
    };
  }, [addingContent, section, updateSection]);

  if (!section) return <></>;
  return (
    <EditSectionStandardDialog
      isOpen={!editContentDialog}
      headingInputValue={editHeadingValue}
      onHeadingInputChange={(value) => setEditHeadingValue(value)}
      onHeadingInputApply={onHeadingInputApply}
      content={arrangeableListItems}
      contentOrder={section.content.map((contentItem) => contentItem.id)}
      onContentOrderChange={onContentOrderChange}
      onConfirm={onConfirm}
      deleteContentDialog={deleteContentDialog}
      addContentDialog={addContentDialog}
      onAddContent={() => setAddingContent(true)}
    />
  );
}
