"use client";

import { EditDialogOverlay } from "@/components/UI/EditDialogOverlay";
import { TextInput } from "@/components/UI/TextInput";
import { useState } from "react";
import { CvContentList } from "../../CvContent/CvContentList";

export interface CvSectionHeaderEditData {
  name: string;
  email: string;
  phone: string;
  address: string;
}
export interface CvSectionHeaderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  onUpdate?: (data: CvSectionHeaderEditData) => void;
}

export function CvSectionHeader({
  id,
  name,
  email,
  phone,
  address,
  onUpdate,
}: CvSectionHeaderProps) {
  const [editedName, setEditedName] = useState<string | undefined>(undefined);
  const [editedEmail, setEditedEmail] = useState<string | undefined>(undefined);
  const [editedPhone, setEditedPhone] = useState<string | undefined>(undefined);
  const [editedAddress, setEditedAddress] = useState<string | undefined>(
    undefined
  );

  const editedData: CvSectionHeaderEditData = {
    name: editedName ?? name,
    email: editedEmail ?? email,
    phone: editedPhone ?? phone,
    address: editedAddress ?? address,
  };

  return (
    <EditDialogOverlay
      className={`grid grid-cols-2 gap-4 w-full py-3`}
      dialogHeading="Edit Header"
      dialogContent={
        <>
          <div className="flex flex-col gap-2 py-2 text-left">
            <TextInput
              label="Title"
              value={editedName ?? name}
              onValueChange={(value) => setEditedName(value)}
            />
          </div>
          <div className="flex flex-col gap-2 py-2 text-left">
            <TextInput
              label="Email"
              value={editedEmail ?? email}
              onValueChange={(value) => setEditedEmail(value)}
            />
            <TextInput
              label="Phone"
              value={editedPhone ?? phone}
              onValueChange={(value) => setEditedPhone(value)}
            />
            <TextInput
              label="Address"
              value={editedAddress ?? address}
              onValueChange={(value) => setEditedAddress(value)}
            />
          </div>
        </>
      }
      onDialogConfirm={onUpdate ? () => onUpdate(editedData) : undefined}
    >
      <div>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="text-right">
        <CvContentList
          listType="list-none"
          items={[
            { id: "email", value: email },
            { id: "phone", value: phone },
            { id: "address", value: address },
          ]}
        />
      </div>
    </EditDialogOverlay>
  );
}
