import { CvService } from "@/services/CvService";
import { emptySchema, mongoIdQuerySchema } from "@/types/API";
import { cvDocumentSchema } from "@/types/CvDocument";
import { endpoint } from "@/utils/request/endpoint";
import { z } from "zod";

export const GET = endpoint({
  handler: async ({ id }) => {
    const result = await CvService.read({ id });
    const payload = result.data.at(0);
    if (!payload) {
      return {
        success: false,
        payload,
        message: "CV not found",
        status: 404,
      };
    }
    return { success: true, payload, message: "CV found" };
  },
  querySchema: mongoIdQuerySchema,
  bodySchema: emptySchema,
  payloadSchema: cvDocumentSchema,
});

export const PUT = endpoint({
  handler: async ({ id }, body) => {
    const cvDocument = {
      ...body,
      id,
    };
    const updateResult = await CvService.update(cvDocument);

    if (updateResult.status === "not-found") {
      return {
        success: false,
        payload: undefined,
        message: "CV not found",
        status: 404,
      };
    }

    return {
      success: true,
      payload: updateResult.data,
      message: "CV updated",
    };
  },
  querySchema: mongoIdQuerySchema,
  bodySchema: cvDocumentSchema,
  payloadSchema: cvDocumentSchema,
});

export const DELETE = endpoint({
  handler: async ({ id }) => {
    const deleteResult = await CvService.delete({ id });
    const deletedCount = deleteResult.data;
    return {
      success: true,
      payload: deletedCount,
      message: `[${deletedCount}] CV Documents deleted`,
      status: 200,
    };
  },
  querySchema: mongoIdQuerySchema,
  bodySchema: emptySchema,
  payloadSchema: z.number(),
});
