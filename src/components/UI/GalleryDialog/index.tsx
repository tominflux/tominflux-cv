import { ReactNode, useState } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { CancelIcon } from "../Icons/CancelIcon";
import { CheckIcon } from "../Icons/CheckIcon";
import { Modal } from "../Modal";
import { SelectableThumbnail } from "../SelectableThumbnail";

export interface GalleryDialogProps {
  isOpen: boolean;
  heading?: ReactNode;
  subheading?: ReactNode;
  thumbnails: { key: string; children: ReactNode }[];
  initialSelectedKey?: string;
  onConfirm?: (selectedKey: string | undefined) => void;
  onCancel?: (selectedKey: string | undefined) => void;
}

export function GalleryDialog({
  isOpen,
  heading,
  subheading,
  thumbnails,
  initialSelectedKey,
  onConfirm,
  onCancel,
}: GalleryDialogProps) {
  const [selectedKey, setSelectedKey] = useState<string | undefined>(
    initialSelectedKey
  );
  const getSelected = (key: string) =>
    selectedKey !== undefined && key === selectedKey;

  return (
    <Modal isOpen={isOpen}>
      <Dialog className="divide-y divide-solid divide-black">
        {heading ? (
          <div className="py-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
              {heading}
            </h2>
            {subheading ? (
              <h3 className="flex items-center gap-2 text-md leading-tight tracking-wide">
                {subheading}
              </h3>
            ) : undefined}
          </div>
        ) : undefined}
        <div className="py-2 grid grid-cols-3 gap-3">
          {thumbnails.map(({ key, children }) => (
            <SelectableThumbnail
              key={key}
              isSelected={getSelected(key)}
              onSelect={() => setSelectedKey(key)}
            >
              {children}
            </SelectableThumbnail>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-3 sm:flex-row py-2">
          {onCancel ? (
            <Button className="px-6 py-2" onClick={() => onCancel(selectedKey)}>
              <CancelIcon />
            </Button>
          ) : undefined}
          {onConfirm ? (
            <Button
              className="px-6 py-2"
              onClick={() => onConfirm(selectedKey)}
            >
              <CheckIcon />
            </Button>
          ) : undefined}
        </div>
      </Dialog>
    </Modal>
  );
}
