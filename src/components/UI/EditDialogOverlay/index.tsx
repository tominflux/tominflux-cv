import { ReactNode, useState } from "react";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { Modal } from "../Modal";
import { Dialog } from "../Dialog";
import { CheckIcon } from "../Icons/CheckIcon";
import { EditIcon } from "../Icons/EditIcon";

export interface EditDialogOverlayProps {
  className?: string;
  children: ReactNode;
  dialogContent: ReactNode;
  dialogHeading?: string;
  onDialogConfirm?: () => void;
}

export function EditDialogOverlay({
  className,
  children,
  dialogContent,
  dialogHeading,
  onDialogConfirm,
}: EditDialogOverlayProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isHovering, setHovering] = useState<boolean>(false);

  const onEditButtonClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Overlay
        className={className}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        overlay={
          <div className="flex flex-col justify-start items-end h-full px-4 py-4">
            <Button
              className="width-max pointer-events-auto"
              onClick={onEditButtonClick}
            >
              <div className="flex flow-row gap-2 items-center">
                <EditIcon />
                <span>Edit</span>
              </div>
            </Button>
          </div>
        }
        renderOverlay={isHovering}
      >
        {children}
      </Overlay>
      <Modal isOpen={isModalOpen}>
        <Dialog className="divide-y divide-solid divide-black">
          {dialogHeading ? (
            <div className="py-2">
              <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
                {dialogHeading}
              </h2>
            </div>
          ) : undefined}
          {dialogContent}
          <div className="flex flex-col justify-end gap-3 sm:flex-row py-2">
            <Button
              className="px-6 py-2"
              onClick={() => {
                setModalOpen(false);
                if (onDialogConfirm) onDialogConfirm();
              }}
            >
              <CheckIcon />
            </Button>
          </div>
        </Dialog>
      </Modal>
    </>
  );
}
