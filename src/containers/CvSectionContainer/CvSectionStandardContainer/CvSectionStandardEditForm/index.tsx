import { ButtonLight } from "@/components/UI/ButtonLight";
import { Capsule } from "@/components/UI/Capsule";
import { DeleteIcon } from "@/components/UI/Icons/DeleteIcon";
import { EditIcon } from "@/components/UI/Icons/EditIcon";
import { TextInput } from "@/components/UI/TextInput";
import { useCvStore } from "@/state";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CapsuleRef, CvSectionStandardEditData } from "..";

export interface CvSectionStandardEditFormProps {
  id: string;
  editData: CvSectionStandardEditData;
  onEdit: (data: Partial<CvSectionStandardEditData>) => void;
}

export function CvSectionStandardEditForm({
  id,
  editData,
  onEdit,
}: CvSectionStandardEditFormProps) {
  const { cv } = useCvStore();

  const section = useMemo(() => {
    const section = (cv?.sections ?? []).find((section) => section.id === id);
    if (!section) return undefined;
    if (section.type !== "standard") return undefined;
    return section;
  }, [cv?.sections, id]);
  const heading = section?.heading;
  const content = section?.content;

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

  const swapContent = useCallback(
    (idA: string, idB: string) => {
      const editContent = editData?.content ?? content;
      if (!editContent) return;
      const contentIndexA = editContent.findIndex(
        (contentItem) => contentItem.id === idA
      );
      const contentIndexB = editContent.findIndex(
        (contentItem) => contentItem.id === idB
      );
      if (contentIndexA === -1 || contentIndexB === -1) return;
      const contentItemA = editContent[contentIndexA];
      const contentItemB = editContent[contentIndexB];
      const nextContentA = [
        ...editContent.slice(0, contentIndexA),
        contentItemB,
        ...editContent.slice(contentIndexA + 1),
      ];
      const nextContentB = [
        ...nextContentA.slice(0, contentIndexB),
        contentItemA,
        ...nextContentA.slice(contentIndexB + 1),
      ];
      onEdit({
        content: nextContentB,
      });
    },
    [content, editData?.content, onEdit]
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
        swapContent(selectedCapsule, proximalCapsule.id);
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
  }, [mouseDownPosition, selectedCapsule, swapContent]);

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
    <>
      <div className="flex flex-col gap-2 py-2 text-left">
        <TextInput
          label="Title"
          value={editData?.heading ?? heading ?? ""}
          onValueChange={(value) =>
            onEdit({
              heading: value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 py-2 text-left">
        <label htmlFor="url" className="block text-sm font-medium">
          Content
        </label>
        {(editData?.content ?? content ?? []).map((contentProps) => (
          <Capsule
            key={contentProps.id}
            ref={(el) => {
              capsuleRefs.current = [
                ...capsuleRefs.current.filter(
                  (capsuleRef) => capsuleRef.id !== contentProps.id
                ),
                {
                  id: contentProps.id,
                  element: el,
                },
              ];
            }}
            className={
              replacedCapsule === contentProps.id ? "opacity-15" : undefined
            }
            onMouseDown={() => {
              setSelectedCapsule(contentProps.id);
            }}
          >
            <div className="flex flex-row gap-4 items-center justify-between">
              <div className="text-left">
                {contentProps.type} - {contentProps.id.slice(0, 12)}...
              </div>
              <div className="flex flex-row gap-2 justify-end">
                <ButtonLight>
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
    </>
  );
}
