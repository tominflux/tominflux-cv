"use client";

import { Dialog } from "@/components/UI/Dialog";
import { Modal } from "@/components/UI/Modal";
import { TextInput } from "@/components/UI/TextInput";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";

export interface CvSectionHeaderEditModalProps {
  isOpen?: boolean;
  onConfirm?: (data: CvDocumentSectionHeader) => void;
  data: CvDocumentSectionHeader;
}

export function CvSectionHeaderEditModal({
  isOpen = false,
  onConfirm,
  data,
}: CvSectionHeaderEditModalProps) {
  const [editedName, setEditedName] = useState<string | undefined>(undefined);

  const editedData: CvDocumentSectionHeader = {
    name: editedName ?? data.name,
  };

  return (
    <Modal
      isOpen={isOpen}
      // onClose={onConfirm ? () => onConfirm(editedData) : undefined}
    >
      <Dialog className="divide-y divide-solid divide-black">
        <div className="py-2">
          <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
            Edit Header
          </h2>
        </div>
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput
            label="Title"
            value={editedName ?? data.name}
            onValueChange={(value) => setEditedName(value)}
          />
        </div>
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput label="Email" />
          <TextInput label="Phone" />
          <TextInput label="Address" />
        </div>
        <div className="flex flex-col justify-end gap-3 sm:flex-row py-2">
          <button
            className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-600 dark:text-gray-50"
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
          </button>
        </div>
      </Dialog>
    </Modal>
  );
}
