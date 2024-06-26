"use client";

import { EditDialogOverlay } from "@/components/UI/EditDialogOverlay";
import { TextInput } from "@/components/UI/TextInput";
import { useState } from "react";
import { CvContentList } from "../../CvContent/CvContentList";
import { isNotUndefined } from "@/utils/typePredicates";
import { EditOverlay } from "@/components/Edit/EditOverlay";

export interface CvSectionHeaderEditData {
  name: string;
  email: string;
  phone: string;
  address: string;
  link1?: string;
  link2?: string;
}
export interface CvSectionHeaderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  link1?: string;
  link2?: string;
  onEditButtonClick?: () => void;
}

export function CvSectionHeader({
  id,
  name,
  email,
  phone,
  address,
  link1,
  link2,
  onEditButtonClick,
}: CvSectionHeaderProps) {
  const containerClassName = "grid grid-cols-4 gap-4 w-full py-3";
  const contents = (
    <>
      <div className="mt-2 mb-2">
        <ul className="list-none">
          {link1 ? <li>{link1}</li> : undefined}
          {link2 ? <li>{link2}</li> : undefined}
        </ul>
      </div>
      <div className="col-span-2 text-center">
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="mt-2 mb-2 text-right">
        <ul className="list-none">
          {email ? <li>{email}</li> : undefined}
          {phone ? <li>{phone}</li> : undefined}
          {address ? <li>{address}</li> : undefined}
        </ul>
      </div>
    </>
  );
  if (!onEditButtonClick) {
    return <div className={containerClassName}>{contents}</div>;
  }
  return (
    <EditOverlay
      className={containerClassName}
      onEditButtonClick={onEditButtonClick}
    >
      {contents}
    </EditOverlay>
  );
}
