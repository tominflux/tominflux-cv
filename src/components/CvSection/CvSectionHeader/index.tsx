"use client";

import { Button } from "@/components/UI/Button";
import { Overlay } from "@/components/UI/Overlay";
import { CvDocumentSectionHeader } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";
import { CvContentList } from "../../CvContent/CvContentList";
import { CvSectionHeaderEditModal } from "./CvSectionHeaderEditModal";

export interface CvSectionHeaderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  onUpdate?: (data: CvDocumentSectionHeader) => void;
}

export function CvSectionHeader({
  id,
  name,
  email,
  phone,
  address,
  onUpdate,
}: CvSectionHeaderProps) {
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);

  const onEditButtonClick = () => {
    setEditModalOpen(true);
  };

  return (
    <>
      <Overlay
        className={`grid grid-cols-2 gap-4 w-full py-3`}
        overlay={
          <div className="flex flex-col justify-center items-center h-full">
            <Button className="width-max" onClick={onEditButtonClick}>
              Edit
            </Button>
          </div>
        }
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
      </Overlay>
      <CvSectionHeaderEditModal
        isOpen={isEditModalOpen}
        data={{ type: "header", id, name, email, phone, address }}
        onConfirm={(data) => {
          setEditModalOpen(false);
          if (onUpdate) {
            onUpdate(data);
          }
        }}
      />
    </>
  );
}
