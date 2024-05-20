import { GalleryDialog } from "@/components/UI/GalleryDialog";
import { CvDocumentSection } from "@/types/CvDocument/CvDocumentSection";
import { ReactNode } from "react";
import { AddSectionThumbnail } from "./AddSectionThumbnail";

export interface AddSectionDialogProps {
  isOpen: boolean;
  onConfirm?: (selectedKey: string | undefined) => void;
  onCancel?: (selectedKey: string | undefined) => void;
}

export function AddSectionDialog({
  isOpen,
  onConfirm,
  onCancel,
}: AddSectionDialogProps) {
  const types: CvDocumentSection["type"][] = ["header", "standard"];

  const thumbnails = types.map<{ key: string; children: ReactNode }>(
    (type) => ({
      key: type,
      children: <AddSectionThumbnail type={type} />,
    })
  );

  return (
    <GalleryDialog
      isOpen={isOpen}
      heading="Add Section"
      thumbnails={thumbnails}
      initialSelectedKey={"standard"}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
