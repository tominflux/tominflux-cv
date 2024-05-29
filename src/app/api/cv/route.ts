import { CvService } from "@/services/CvService";
import { emptySchema } from "@/types/API";
import { cvDocumentSchema } from "@/types/CvDocument";
import { endpoint } from "@/utils/request/endpoint";

export const POST = endpoint({
  handler: async () => {
    const createResult = await CvService.create();
    return {
      success: true,
      payload: createResult.data,
      message: "Created new CV Document",
      status: 201,
    };
  },
  querySchema: emptySchema,
  bodySchema: emptySchema,
  payloadSchema: cvDocumentSchema,
});
