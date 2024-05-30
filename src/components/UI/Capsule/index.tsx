import clsx from "clsx";
import { ForwardedRef, MouseEventHandler, ReactNode, forwardRef } from "react";

export interface CapsuleProps {
  children: ReactNode;
  className?: string;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}

export const Capsule = forwardRef(
  (
    { children, className, onMouseDown }: CapsuleProps,
    ref: ForwardedRef<HTMLDivElement | null>
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "border border-solid border-black rounded-md px-2 py-1 select-none dark:bg-gray-50 dark:text-gray-800",
          className
        )}
        onMouseDown={onMouseDown}
      >
        {children}
      </div>
    );
  }
);
Capsule.displayName = "Capsule";
