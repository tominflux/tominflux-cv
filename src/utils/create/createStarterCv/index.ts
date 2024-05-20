import { CvDocument } from "@/types/CvDocument";
import { uuid } from "@/utils/uuid";
import {
  createStarterSectionHeader,
  createStarterSectionStandard,
} from "../createStarterSection";

export function createStarterCv(): CvDocument {
  return {
    id: uuid(),
    metadata: {
      name: "untitled-document",
    },
    sections: [createStarterSectionHeader(), createStarterSectionStandard()],
  };
}
