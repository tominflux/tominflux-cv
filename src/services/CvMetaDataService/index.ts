import { CvMetaDataFactory } from "@/factories/cvMetaDataFactory";

async function cvMetaDataServiceRead() {
  const readResult = await CvMetaDataFactory.read({});
  return readResult;
}

export const CvMetaDataService = {
  read: cvMetaDataServiceRead,
};
