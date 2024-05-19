import { CvSectionStandard } from "@/components/CvSection/CvSectionStandard";
import { CvContentContainer } from "@/containers/CvContentContainer";
import { useCvStore } from "@/state/CvStore";
import { useUiStore } from "@/state/UiStore";
import { CvDocumentSectionStandard } from "@/types/CvDocument/CvDocumentSection";
import { useState } from "react";

export interface CapsuleRef {
  id: string;
  element: HTMLDivElement | null;
}

export type CvSectionStandardContainerProps = CvDocumentSectionStandard;

export type CvSectionStandardEditData = Omit<
  CvDocumentSectionStandard,
  "id" | "type"
>;

export function CvSectionStandardContainer({
  id,
  heading,
  content,
}: CvSectionStandardContainerProps) {
  const { updateSection } = useCvStore();
  const { openSectionDialog } = useUiStore();

  const [editingContent, setEditingContent] = useState<string | undefined>(
    undefined
  );

  const [editData, setEditData] = useState<CvSectionStandardEditData>({
    heading,
    content,
  });

  // const editingContentItem = editingContent
  //   ? editData.content.find((contentItem) => contentItem.id === editingContent)
  //   : undefined;

  // const onUpdateSection: () => void | boolean = () => {
  //   const section: CvDocumentSectionStandard = {
  //     id,
  //     type: "standard",
  //     ...editData,
  //   };
  //   updateSection(section);
  // };

  // const onUpdateContent: () => void | boolean = () => {
  //   setEditingContent(undefined);
  //   return false;
  // };

  // const getEditContentSubHeading = () => {
  //   if (!editingContent) return undefined;
  //   const contentItem = content.find(
  //     (contentItem) => contentItem.id === editingContent
  //   );
  //   if (!contentItem) return undefined;
  //   switch (contentItem.type) {
  //     case "list":
  //       return (
  //         <>
  //           <ListIcon />
  //           <span>List</span>
  //         </>
  //       );
  //     case "lorem":
  //       return (
  //         <>
  //           <QuestionMarkIcon />
  //           <span>Lorem Ipsum</span>
  //         </>
  //       );
  //   }
  // };

  // const replaceContent = (nextContent: CvDocumentContent) => {
  //   const index = editData.content.findIndex(
  //     (contentItem) => contentItem.id === nextContent.id
  //   );
  //   console.log("DEBUG", { index, nextContent });
  //   if (index === -1) return;
  //   setEditData({
  //     ...editData,
  //     content: [
  //       ...editData.content.slice(0, index),
  //       nextContent,
  //       ...editData.content.slice(index + 1),
  //     ],
  //   });
  // };

  return (
    <CvSectionStandard
      heading={heading}
      // onUpdate={editingContent ? onUpdateContent : onUpdateSection}
      // editHeading={editingContent ? "Edit Content" : "Edit Section"}
      // editSubHeading={getEditContentSubHeading()}
      // editForm={
      //   editingContentItem ? (
      //     <CvContentEditFormContainer
      //       content={editingContentItem}
      //       onUpdate={(nextContent) => {
      //         replaceContent(nextContent);
      //       }}
      //     />
      //   ) : (
      //     <CvSectionStandardEditFormContainer
      //       id={id}
      //       editData={editData}
      //       onEdit={(newEditData) => {
      //         setEditData((prevEditData) => ({
      //           ...prevEditData,
      //           ...newEditData,
      //         }));
      //       }}
      //       onEditContent={(contentId) => setEditingContent(contentId)}
      //     />
      //   )
      // }
      onEditButtonClick={() => openSectionDialog(id)}
    >
      {content.map((contentProps) => (
        <CvContentContainer key={contentProps.id} {...contentProps} />
      ))}
    </CvSectionStandard>
  );
}
