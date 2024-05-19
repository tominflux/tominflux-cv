import { ReactNode } from "react";
import { Dialog } from "../Dialog";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { CheckIcon } from "../Icons/CheckIcon";
import { CancelIcon } from "../Icons/CancelIcon";

export interface ConfirmationDialogProps {
  isOpen: boolean;
  heading?: ReactNode;
  subheading?: ReactNode;
  children?: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function ConfirmationDialog({
  isOpen,
  heading,
  subheading,
  children,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  return (
    <Modal isOpen={isOpen}>
      <Dialog className="divide-y divide-solid divide-black">
        {heading ? (
          <div className="py-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
              {heading}
            </h2>
            {subheading ? (
              <h3 className="flex items-center gap-2 text-md leading-tight tracking-wide">
                {subheading}
              </h3>
            ) : undefined}
          </div>
        ) : undefined}
        {children}
        <div className="flex flex-row justify-end gap-3 sm:flex-row py-2">
          {onCancel ? (
            <Button className="px-6 py-2" onClick={onCancel}>
              <CancelIcon />
            </Button>
          ) : undefined}
          <Button className="px-6 py-2" onClick={onConfirm}>
            <CheckIcon />
          </Button>
        </div>
      </Dialog>
    </Modal>
  );
}

export default ConfirmationDialog;
