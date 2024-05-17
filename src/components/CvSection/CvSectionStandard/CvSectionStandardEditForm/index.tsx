import { ButtonLight } from "@/components/UI/ButtonLight";
import { Capsule } from "@/components/UI/Capsule";
import { Dialog } from "@/components/UI/Dialog";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
import { Modal } from "@/components/UI/Modal";
import { TextInput } from "@/components/UI/TextInput";
import { ReactNode } from "react";

export interface CvSectionStandardEditFormProps {
  headingInputValue: string;
  onHeadingInputChange: (value: string) => void;
  contentCapsules: {
    id: string;
    ref: (el: HTMLDivElement) => void;
    transparent: boolean;
    onMouseDown: () => void;
    icon: ReactNode;
    label: string;
    onEdit: () => void;
  }[];
  maxLabelLength?: number;
}

export function CvSectionStandardEditForm({
  headingInputValue,
  onHeadingInputChange,
  contentCapsules,
  maxLabelLength = 24,
}: CvSectionStandardEditFormProps) {
  const getTruncatedLabel = (label: string) => {
    if (label.length <= maxLabelLength) return label;
    return `${label.slice(0, maxLabelLength)}...`;
  };

  return (
    <>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Title"
          value={headingInputValue}
          onValueChange={onHeadingInputChange}
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <label htmlFor="url" className="block text-sm font-medium">
          Content
        </label>
        {contentCapsules.map((contentCapsule) => (
          <Capsule
            key={contentCapsule.id}
            ref={contentCapsule.ref}
            className={contentCapsule.transparent ? "opacity-15" : undefined}
            onMouseDown={contentCapsule.onMouseDown}
          >
            <div className="flex flex-row gap-4 items-center justify-between">
              <div className="flex flex-row gap-2 justify-end">
                <div>{contentCapsule.icon}</div>
                <div>{getTruncatedLabel(contentCapsule.label)}</div>
              </div>
              <div className="flex flex-row gap-2 justify-end">
                <ButtonLight onClick={contentCapsule.onEdit}>
                  <EditIcon />
                </ButtonLight>
                <ButtonLight>
                  <DeleteIcon />
                </ButtonLight>
              </div>
            </div>
          </Capsule>
        ))}
      </div>
      {/* <Modal isOpen={true}>
        <Dialog>
          <p>Lorem Ipsum</p>
        </Dialog>
      </Modal> */}
    </>
  );
}
