import { ReactNode, useState } from "react";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { Modal } from "../Modal";
import { Dialog } from "../Dialog";

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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
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
                Edit Header
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
    </>
  );
}
