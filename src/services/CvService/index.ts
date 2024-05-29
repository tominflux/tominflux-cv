import { CvFactory } from "@/factories/cvFactory";
import { CvDocument } from "@/types/CvDocument";
import { createStarterCv } from "@/utils/create/createStarterCv";

// CREATE
async function cvServiceCreate() {
  const newCvDocument = createStarterCv();
  const createResult = await CvFactory.create(newCvDocument);
  return createResult;
}

// READ
export interface CvServiceReadParams {
  id: string;
}
async function cvServiceRead({ id }: CvServiceReadParams) {
  const readResult = await CvFactory.read({ id });
  return readResult;
}

// UPDATE
async function cvServiceUpdate(data: CvDocument) {
  const updateResult = await CvFactory.update(data);
  return updateResult;
}

// DELETE
export interface CvServiceDeleteParams {
  id: string;
}
async function cvServiceDelete({ id }: CvServiceDeleteParams) {
  const deleteResult = await CvFactory.delete({ id });
  return deleteResult;
}

// CV SERVICE
export const CvService = {
  create: cvServiceCreate,
  read: cvServiceRead,
  update: cvServiceUpdate,
  delete: cvServiceDelete,
};
