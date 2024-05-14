import {
  CvSectionStandard,
  CvSectionStandardEditData,
} from "@/components/CvSection/CvSectionStandard";
import { Capsule } from "@/components/UI/Capsule";
import { CvContentContainer } from "@/containers/CvContentContainer";
import { useCvStore } from "@/state";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";
import { useEffect, useRef, useState } from "react";

export interface CapsuleRef {
  id: string;
  element: HTMLDivElement | null;
}

export type CvSectionStandardContainerProps = CvDocumentSectionStandard;

export function CvSectionStandardContainer({
  id,
  heading,
  content,
}: CvSectionStandardContainerProps) {
  const { cv, updateSection } = useCvStore();
  const onUpdate = (data: CvSectionStandardEditData) => {
    const section: CvDocumentSectionStandard = {
      ...data,
      id,
      type: "standard",
      content,
    };
    updateSection(section);
  };

  const swapContent = (idA: string, idB: string) => {
    const section = cv?.sections.find((section) => section.id === id);
    if (!section || section.type !== "standard") return;
    const content = section.content;
    const contentIndexA = content.findIndex(
      (contentItem) => contentItem.id === idA
    );
    const contentIndexB = content.findIndex(
      (contentItem) => contentItem.id === idB
    );
    if (contentIndexA === -1 || contentIndexB === -1) return;
    const contentItemA = section.content[contentIndexA];
    const contentItemB = section.content[contentIndexB];
    const nextContentA = [
      ...content.slice(0, contentIndexA),
      contentItemB,
      ...content.slice(contentIndexA + 1),
    ];
    const nextContentB = [
      ...nextContentA.slice(0, contentIndexB),
      contentItemA,
      ...nextContentA.slice(contentIndexB + 1),
    ];
    const nextSection = {
      ...section,
      content: nextContentB,
    };
    updateSection(nextSection);
  };

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
        console.log("SWAP", { selectedCapsule, proximalCapsule });
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
    <CvSectionStandard
      heading={heading}
      onUpdate={onUpdate}
      editContentForm={
        <>
          <label htmlFor="url" className="block text-sm font-medium">
            Content
          </label>
          {content.map((contentProps) => (
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
              {contentProps.type} - {contentProps.id}
            </Capsule>
          ))}
        </>
      }
    >
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
