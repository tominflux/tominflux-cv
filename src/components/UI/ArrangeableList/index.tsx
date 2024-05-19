import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Capsule } from "../Capsule";
import { swapElements } from "@/utils/swapElements";
import clsx from "clsx";

export interface CapsuleRef {
  id: string;
  element: HTMLDivElement | null;
}

export interface ArrangeableListItem {
  id: string;
  className?: string;
  content: ReactNode;
}

export interface ArrangeableListProps {
  items: ArrangeableListItem[];
  itemOrder: string[];
  onItemOrderChange: (itemOrder: string[]) => void;
}

export function ArrangeableList({
  items,
  itemOrder,
  onItemOrderChange,
}: ArrangeableListProps) {
  const capsuleRefs = useRef<CapsuleRef[]>([]);
  const hoveringCapsuleRef = useRef<HTMLDivElement | null>(null);
  const [selectedCapsule, setSelectedCapsule] = useState<string | undefined>(
    undefined
  );
  const selectedItem = items.find((item) => item.id === selectedCapsule);
  const [selectedCapsulePosition, setSelectedCapsulePosition] = useState<
    { x: number; y: number } | undefined
  >(undefined);
  const [mouseDownPosition, setMouseDownPosition] = useState<
    { x: number; y: number } | undefined
  >(undefined);

  const orderedItems = itemOrder.map((itemId) =>
    items.find(({ id }) => id === itemId)
  );

  const swapItems = useCallback(
    (idA: string, idB: string) => {
      const indexA = itemOrder.findIndex((id) => id === idA);
      const indexB = itemOrder.findIndex((id) => id === idB);
      if (indexA === -1 || indexB === -1) return;
      const nextItemOrder = swapElements(itemOrder, indexA, indexB);
      onItemOrderChange(nextItemOrder);
    },
    [itemOrder, onItemOrderChange]
  );

  // Record mouse down position
  useEffect(() => {
    const onMouseDown: (this: Window, ev: MouseEvent) => void = (event) => {
      setMouseDownPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  //
  useEffect(() => {
    const onMouseMove: (this: Window, ev: MouseEvent) => void = (event) => {
      if (!selectedCapsule) return;
      if (!selectedCapsulePosition) return;
      if (!mouseDownPosition) return;
      const element = hoveringCapsuleRef?.current;
      if (!element) return;

      const dx = event.clientX - mouseDownPosition.x;
      const dy = event.clientY - mouseDownPosition.y;
      const elX = selectedCapsulePosition.x + dx;
      const elY = selectedCapsulePosition.y + dy;
      element.style.left = `${elX}px`;
      element.style.top = `${elY}px`;

      const proximalCapsule = capsuleRefs.current
        .filter(({ id, element: otherElement }) => {
          if (!otherElement) return false;
          if (id === selectedCapsule) return false;
          const elementDistance = Math.abs(
            otherElement.offsetTop - element.offsetTop
          );
          if (elementDistance < 16) return true;
          return false;
        })
        .at(0);
      if (proximalCapsule && proximalCapsule.element) {
        swapItems(selectedCapsule, proximalCapsule.id);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseDownPosition, selectedCapsule, selectedCapsulePosition, swapItems]);

  useEffect(() => {
    const onMouseUp = () => {
      if (!selectedCapsule) return;
      const capsuleRef = capsuleRefs.current.find(
        ({ id }) => id === selectedCapsule
      );
      const element = capsuleRef?.element;
      if (element) {
        element.style.left = `0px`;
        element.style.top = `0px`;
      }
      setSelectedCapsule(undefined);
    };

    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [selectedCapsule]);

  return (
    <div className="flex flex-col gap-2 py-2 relative">
      {orderedItems.map((item) =>
        item ? (
          <Capsule
            key={item.id}
            ref={(el) => {
              capsuleRefs.current = [
                ...capsuleRefs.current.filter(
                  (capsuleRef) => capsuleRef.id !== item.id
                ),
                {
                  id: item.id,
                  element: el,
                },
              ];
            }}
            className={
              selectedCapsule === item.id ? "opacity-0" : item.className
            }
            onMouseDown={(event) => {
              const element = capsuleRefs.current.find(
                (capsuleRef) => capsuleRef.id === item.id
              )?.element;
              if (!element) return;
              if (event.target !== element) return;
              setSelectedCapsule(item.id);

              setSelectedCapsulePosition({
                x: element.offsetLeft,
                y: element.offsetTop,
              });

              const hoveringElement = hoveringCapsuleRef?.current;
              if (!hoveringElement) return;
              hoveringElement.style.left = `${element.offsetLeft}px`;
              hoveringElement.style.top = `${element.offsetTop}px`;
            }}
          >
            {item.content}
          </Capsule>
        ) : undefined
      )}
      <Capsule
        ref={hoveringCapsuleRef}
        className={clsx(
          "absolute left-0 top-0 w-full",
          selectedItem ? undefined : "invisible pointer-events-none"
        )}
      >
        {selectedItem?.content}
      </Capsule>
    </div>
  );
}
