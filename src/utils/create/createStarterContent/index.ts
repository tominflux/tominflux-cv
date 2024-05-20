import {
  CvDocumentContent,
  CvDocumentContentList,
  CvDocumentContentLorem,
} from "@/types/CvDocument/CvDocumentContent";
import { uuid } from "@/utils/uuid";

export function createStarterContentList(): CvDocumentContentList {
  return {
    id: uuid(),
    type: "list",
    heading: "Lorem Ipsum",
    items: [
      {
        id: uuid(),
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: uuid(),
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: uuid(),
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  };
}

export function createStarterContentLorem(): CvDocumentContentLorem {
  return {
    id: uuid(),
    type: "lorem",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  };
}

export function createStarterContent(
  type: CvDocumentContent["type"]
): CvDocumentContent {
  switch (type) {
    case "list":
      return createStarterContentList();
    case "lorem":
      return createStarterContentLorem();
  }
}
