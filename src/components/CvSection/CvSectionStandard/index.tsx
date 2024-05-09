import { Button } from "@/components/UI/Button";
import { Overlay } from "@/components/UI/Overlay";
import { ReactNode, useState } from "react";
import {
  CvSectionStandardEditData,
  CvSectionStandardEditModal,
} from "./CvSectionStandardEditModal";

export interface CvSectionStandardProps {
  heading: string;
  children: ReactNode;
  onUpdate?: (data: CvSectionStandardEditData) => void;
}

export function CvSectionStandard({
  heading,
  children,
  onUpdate,
}: CvSectionStandardProps) {
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);

  const onEditButtonClick = () => {
    setEditModalOpen(true);
  };

  return (
    <>
      <Overlay
        className={`w-full py-3`}
        overlay={
          <div className="flex flex-col justify-center items-center h-full">
            <Button className="width-max" onClick={onEditButtonClick}>
              Edit
            </Button>
          </div>
        }
      >
        {heading ? <h3 className="text-2xl mb-2">{heading}</h3> : undefined}
        <div className={`px-3`}>{children}</div>
      </Overlay>
      <CvSectionStandardEditModal
        isOpen={isEditModalOpen}
        data={{ heading }}
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
