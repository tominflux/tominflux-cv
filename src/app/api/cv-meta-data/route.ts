import { CvMetaDataService } from "@/services/CvMetaDataService";
import { emptySchema } from "@/types/API";
import { cvMetaDataDocumentSchema } from "@/types/CvMetaDataDocument";
import { endpoint } from "@/utils/request/endpoint";

export const GET = endpoint({
  handler: async () => {
    const result = await CvMetaDataService.read();
    return {
      success: true,
      payload: result.data,
      message: `[${result.data.length}] CV MetaData Documents found`,
    };
  },
  querySchema: emptySchema,
  bodySchema: emptySchema,
  payloadSchema: cvMetaDataDocumentSchema.array(),
});
