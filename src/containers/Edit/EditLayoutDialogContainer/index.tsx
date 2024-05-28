import {
  EditLayoutDialog,
  EditLayoutDialogProps,
} from "@/components/Edit/EditLayoutDialog";
import { ConfirmationDialogProps } from "@/components/UI/ConfirmationDialog";
import { QueueListIcon } from "@/components/UI/Icons/QueueListIcon";
import { RectangleGroupIcon } from "@/components/UI/Icons/RectangleGroupIcon";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { useMemo, useState } from "react";

export function EditLayoutDialogContainer() {
  const { cv, updateSectionsOrder } = useCvStore();
  const {
    isEditLayoutDialogOpen,
    openSectionDialog,
    openAddSectionDialog,
    closeEditLayoutDialog,
    openDeleteSectionDialog,
  } = useUiStore();

  const getIcon = (sectionType: CvDocumentSection["type"]) => {
    switch (sectionType) {
      case "header":
        return <QueueListIcon />;
      case "standard":
        return <RectangleGroupIcon />;
    }
  };

  const getLabel = (sectionType: CvDocumentSection["type"]) => {
    switch (sectionType) {
      case "header":
        return "Header";
      case "standard":
        return "Standard";
    }
  };

  const arrangeableListItems = useMemo<
    EditLayoutDialogProps["sections"]
  >(() => {
    if (!cv) return [];
    return cv.sections.map((section) => ({
      id: section.id,
      icon: getIcon(section.type),
      label: getLabel(section.type),
      onEdit: () => openSectionDialog(section.id),
      onDelete: () => openDeleteSectionDialog(section.id),
    }));
  }, [cv, openDeleteSectionDialog, openSectionDialog]);
  const arrangeableListOrder = useMemo(
    () => arrangeableListItems.map(({ id }) => id),
    [arrangeableListItems]
  );

  return (
    <EditLayoutDialog
      isOpen={isEditLayoutDialogOpen}
      sections={arrangeableListItems}
      sectionsOrder={arrangeableListOrder}
      onSectionsOrderChange={(newSectionsOder) =>
        updateSectionsOrder(newSectionsOder)
      }
      onAddSection={() => openAddSectionDialog()}
      onConfirm={() => closeEditLayoutDialog()}
    />
  );
}
