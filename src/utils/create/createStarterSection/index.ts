import {
  CvDocumentSection,
  CvDocumentSectionHeader,
  CvDocumentSectionStandard,
} from "@/types/CvDocument/CvDocumentSection";
import { uuid } from "@/utils/uuid";
import { createStarterContentList } from "../createStarterContent";

export function createStarterSectionHeader(): CvDocumentSectionHeader {
  return {
    id: uuid(),
    type: "header",
    name: "Lorem Ipsum",
    email: "lorem@ipsum.com",
    phone: "123456789",
    address: "1 Lorem Street, Ipsum",
  };
}

export function createStarterSectionStandard(): CvDocumentSectionStandard {
  return {
    id: uuid(),
    type: "standard",
    heading: "Lorem Ipsum",
    content: [createStarterContentList()],
  };
}

export function createStarterSection(type: CvDocumentSection["type"]) {
  switch (type) {
    case "header":
      return createStarterSectionHeader();
    case "standard":
      return createStarterSectionStandard();
  }
}
