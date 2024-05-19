import { ReactNode } from "react";
import { Modal } from "../Modal";
import { Dialog } from "../Dialog";
import { Button } from "../Button";
import { CheckIcon } from "../Icons/CheckIcon";

export interface EditDialogProps {
  isOpen: boolean;
  heading?: ReactNode;
  subheading?: ReactNode;
  children: ReactNode;
  onConfirm: () => void;
}

export function EditDialog({
  isOpen,
  heading,
  subheading,
  children,
  onConfirm,
}: EditDialogProps) {
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
        <div className="flex flex-col justify-end gap-3 sm:flex-row py-2">
          <Button className="px-6 py-2" onClick={onConfirm}>
            <CheckIcon />
          </Button>
        </div>
      </Dialog>
    </Modal>
  );
}
