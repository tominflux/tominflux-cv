import { getMongoCollection } from "@/lib/mongodb";
import { CvDocument } from "@/types/CvDocument";
import { CvMetaDataDocument } from "@/types/CvMetaDataDocument";
import { MongoDocument } from "@/types/Factory";
import { getFactoryDocuments } from "@/utils/mongodb/getFactoryDocuments";
import { getMongoFilter } from "@/utils/mongodb/getMongoFilter";

async function cvMetaDataFactoryRead(query: Partial<CvDocument>) {
  const cvCollection = await getMongoCollection("cv");

  const mongoFilter = getMongoFilter(query);
  const pipeline = [
    {
      $match: { ...mongoFilter },
    },
    {
      $project: {
        _id: true,
        metadata: true,
      },
    },
  ];
  const mongoDocuments = await cvCollection
    .aggregate<MongoDocument<CvMetaDataDocument>>(pipeline)
    .toArray();
  const documents = getFactoryDocuments(mongoDocuments);

  return {
    status: "success",
    data: documents,
  };
}

export const CvMetaDataFactory = {
  read: cvMetaDataFactoryRead,
};
