import { Button } from "@/components/UI/Button";
import { Dialog } from "@/components/UI/Dialog";
import { Modal } from "@/components/UI/Modal";
import { TextInput } from "@/components/UI/TextInput";
import {
  CvDocumentSectionHeader,
  CvDocumentSectionStandard,
} from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";

export interface CvSectionStandardEditData {
  heading: string;
}

export interface CvSectionStandardEditModalProps {
  isOpen?: boolean;
  onConfirm?: (data: CvSectionStandardEditData) => void;
  data: CvSectionStandardEditData;
}

export function CvSectionStandardEditModal({
  isOpen = false,
  onConfirm,
  data,
}: CvSectionStandardEditModalProps) {
  const [editedHeading, setEditedHeading] = useState<string | undefined>(
    undefined
  );

  const editedData: CvSectionStandardEditData = {
    heading: editedHeading ?? data.heading,
  };

  return (
    <Modal isOpen={isOpen}>
      <Dialog className="divide-y divide-solid divide-black">
        <div className="py-2">
          <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
            Edit Header
          </h2>
        </div>
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput
            label="Title"
            value={editedHeading ?? data.heading}
            onValueChange={(value) => setEditedHeading(value)}
          />
        </div>
        <div className="flex flex-col justify-end gap-3 sm:flex-row py-2">
          <Button
            className="px-6 py-2"
            onClick={onConfirm ? () => onConfirm(editedData) : undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </Button>
        </div>
      </Dialog>
    </Modal>
  );
}
