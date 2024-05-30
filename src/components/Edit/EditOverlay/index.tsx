import { Button } from "@/components/UI/Button";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
import { Overlay } from "@/components/UI/Overlay";
import { ReactNode, useState } from "react";

export interface EditOverlayProps {
  className?: string;
  children: ReactNode;
  onEditButtonClick: () => void;
}

export function EditOverlay({
  className,
  children,
  onEditButtonClick,
}: EditOverlayProps) {
  const [isHovering, setHovering] = useState<boolean>(false);

  return (
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
            <div className="flex flex-row gap-2 items-center">
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
  );
}
