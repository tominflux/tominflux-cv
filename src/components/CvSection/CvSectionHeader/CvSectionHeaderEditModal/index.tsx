"use client";

import { Button } from "@/components/UI/Button";
import { Dialog } from "@/components/UI/Dialog";
import { Modal } from "@/components/UI/Modal";
import { TextInput } from "@/components/UI/TextInput";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";

export interface CvSectionHeaderEditData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface CvSectionHeaderEditModalProps {
  isOpen?: boolean;
  onConfirm?: (data: CvSectionHeaderEditData) => void;
  data: CvSectionHeaderEditData;
}

export function CvSectionHeaderEditModal({
  isOpen = false,
  onConfirm,
  data,
}: CvSectionHeaderEditModalProps) {
  const [editedName, setEditedName] = useState<string | undefined>(undefined);
  const [editedEmail, setEditedEmail] = useState<string | undefined>(undefined);
  const [editedPhone, setEditedPhone] = useState<string | undefined>(undefined);
  const [editedAddress, setEditedAddress] = useState<string | undefined>(
    undefined
  );

  const editedData: CvSectionHeaderEditData = {
    name: editedName ?? data.name,
    email: editedEmail ?? data.email,
    phone: editedPhone ?? data.phone,
    address: editedAddress ?? data.address,
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
            value={editedName ?? data.name}
            onValueChange={(value) => setEditedName(value)}
          />
        </div>
        <div className="flex flex-col gap-2 py-2 text-left">
          <TextInput
            label="Email"
            value={editedEmail ?? data.email}
            onValueChange={(value) => setEditedEmail(value)}
          />
          <TextInput
            label="Phone"
            value={editedPhone ?? data.phone}
            onValueChange={(value) => setEditedPhone(value)}
          />
          <TextInput
            label="Address"
            value={editedAddress ?? data.address}
            onValueChange={(value) => setEditedAddress(value)}
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
