import { GalleryDialog } from "@/components/UI/GalleryDialog";
import { SelectableThumbnailProps } from "@/components/UI/SelectableThumbnail";
import { AddContentThumbnail } from "./AddContentThumbnail";
import { CvDocumentContent } from "@/types/CvDocument/CvDocumentContent";
import { ReactNode } from "react";

export interface AddContentDialogProps {
  isOpen: boolean;
  onConfirm?: (selectedKey: string | undefined) => void;
  onCancel?: (selectedKey: string | undefined) => void;
}

export function AddContentDialog({
  isOpen,
  onConfirm,
  onCancel,
}: AddContentDialogProps) {
  const types: CvDocumentContent["type"][] = ["list", "lorem"];

  const thumbnails = types.map<{ key: string; children: ReactNode }>(
    (type) => ({
      key: type,
      children: <AddContentThumbnail type={type} />,
    })
  );

  return (
    <GalleryDialog
      isOpen={isOpen}
      heading="Add Content"
      thumbnails={thumbnails}
      initialSelectedKey={types[0]}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
