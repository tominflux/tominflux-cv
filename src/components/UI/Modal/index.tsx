import { ReactNode } from "react";
import clsx from "clsx";

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export function Modal({ isOpen = false, onClose, children }: ModalProps) {
  const handleBackdropClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 w-screen overflow-y-auto",
        isOpen ? undefined : "hidden"
      )}
      onClick={handleBackdropClick}
    >
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        {children}
      </div>
    </div>
  );
}
