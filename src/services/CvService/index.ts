import { CvFactory } from "@/factories/cvFactory";
import { CvDocument } from "@/types/CvDocument";
import { createStarterCv } from "@/utils/create/createStarterCv";

async function cvServiceCreate() {
  const newCvDocument = createStarterCv();
  const createResult = await CvFactory.create(newCvDocument);
  return createResult;
}

export interface CvServiceReadParams {
  id: string;
}
async function cvServiceRead({ id }: CvServiceReadParams) {
  const readResult = await CvFactory.read({ id });
  return readResult;
}

async function cvServiceUpdate(data: CvDocument) {
  const updateResult = await CvFactory.update(data);
  return updateResult;
}

export interface CvServiceDeleteParams {
  id: string;
}
async function cvServiceDelete({ id }: CvServiceDeleteParams) {
  const deleteResult = await CvFactory.delete({ id });
  return deleteResult;
}

export const CvService = {
  create: cvServiceCreate,
  read: cvServiceRead,
  update: cvServiceUpdate,
  delete: cvServiceDelete,
};
