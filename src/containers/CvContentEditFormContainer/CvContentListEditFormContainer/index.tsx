import { CvContentListEditForm } from "@/components/CvContent/CvContentList/CvContentListEditForm";
import { CapsuleRef } from "@/containers/CvSectionContainer/CvSectionStandardContainer";
import { CvDocumentContentList } from "@/types/CvDocument/CvDocumentContent";
import { useCallback, useEffect, useRef, useState } from "react";

export type CvContentListEditData = Omit<CvDocumentContentList, "id" | "type">;

export interface CvContentListEditFormContainerProps {
  content: CvDocumentContentList;
  onUpdate: (data: CvDocumentContentList) => void;
}

export function CvContentListEditFormContainer({
  content: editData,
  onUpdate: onUpdate,
}: CvContentListEditFormContainerProps) {
  const capsuleRefs = useRef<CapsuleRef[]>([]);
  const [selectedCapsule, setSelectedCapsule] = useState<string | undefined>(
    undefined
  );
  const [replacedCapsule, setReplacedCapsule] = useState<string | undefined>(
    undefined
  );
  const [mouseDownPosition, setMouseDownPosition] = useState<
    { x: number; y: number } | undefined
  >(undefined);

  const swapItem = useCallback(
    (idA: string, idB: string) => {
      const itemIndexA = editData.items.findIndex((item) => item.id === idA);
      const contentIndexB = editData.items.findIndex((item) => item.id === idB);
      if (itemIndexA === -1 || contentIndexB === -1) return;
      const itemA = editData.items[itemIndexA];
      const itemB = editData.items[contentIndexB];
      const nextItemsA = [
        ...editData.items.slice(0, itemIndexA),
        itemB,
        ...editData.items.slice(itemIndexA + 1),
      ];
      const nextItemsB = [
        ...nextItemsA.slice(0, contentIndexB),
        itemA,
        ...nextItemsA.slice(contentIndexB + 1),
      ];
      onUpdate({
        ...editData,
        items: nextItemsB,
      });
    },
    [editData, onUpdate]
  );

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

  useEffect(() => {
    const onMouseMove: (this: Window, ev: MouseEvent) => void = (event) => {
      if (!selectedCapsule) return;
      if (!mouseDownPosition) return;
      const capsuleRef = capsuleRefs.current.find(
        ({ id }) => id === selectedCapsule
      );
      const element = capsuleRef?.element;
      if (!element) return;

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
        swapItem(selectedCapsule, proximalCapsule.id);
        setMouseDownPosition({
          x:
            event.clientX +
            (proximalCapsule.element.offsetLeft - element.offsetLeft),
          y:
            event.clientY +
            (proximalCapsule.element.offsetTop - element.offsetTop),
        });
      }

      const dx = event.clientX - mouseDownPosition.x;
      const dy = event.clientY - mouseDownPosition.y;
      element.style.left = `${dx}px`;
      element.style.top = `${dy}px`;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseDownPosition, selectedCapsule, swapItem]);

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
      setReplacedCapsule(undefined);
    };

    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [selectedCapsule]);

  return (
    <CvContentListEditForm
      headingInputValue={editData.heading ?? ""}
      onHeadingInputChange={(value) =>
        onUpdate({ ...editData, heading: value })
      }
      items={editData.items.map((item) => ({
        id: item.id,
        ref: (el) => {
          capsuleRefs.current = [
            ...capsuleRefs.current.filter(
              (capsuleRef) => capsuleRef.id !== item.id
            ),
            {
              id: item.id,
              element: el,
            },
          ];
        },
        transparent: replacedCapsule === item.id,
        onMouseDown: () => {
          setSelectedCapsule(item.id);
        },
        icon: undefined,
        label: item.value,
        onEdit: () => {},
        onDelete: () => {},
      }))}
    />
  );
}
