import { CvFactory } from "@/factories/cvFactory";
import { cvDocumentSchema } from "@/types/CvDocument";
import { type NextRequest } from "next/server";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: unknown }
) {
  const paramsParseResult = z
    .object({
      id: z.string().regex(/^[0-9a-f]{24}$/),
    })
    .safeParse(params);
  if (!paramsParseResult.success) {
    return Response.json(
      {
        payload: undefined,
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const { id } = paramsParseResult.data;

  const readResult = await CvFactory.read({ id });

  const payload = readResult.data.at(0);
  if (!payload) {
    return Response.json(
      {
        payload,
        message: "Not found",
      },
      { status: 404 }
    );
  }

  return Response.json({
    payload,
    message: `Found [${readResult.data.length}] CV Documents`,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: unknown }
) {
  const paramsParseResult = z
    .object({
      id: z.string().regex(/^[0-9a-f]{24}$/),
    })
    .safeParse(params);
  if (!paramsParseResult.success) {
    return Response.json(
      {
        payload: undefined,
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const { id } = paramsParseResult.data;

  const requestBody = await request.json();
  const documentParseResult = cvDocumentSchema.safeParse(requestBody);
  if (!documentParseResult.success) {
    console.error(documentParseResult.error.toString());
    return Response.json(
      {
        payload: undefined,
        message: "Invalid body",
      },
      { status: 400 }
    );
  }
  const cvFactoryDocumentData = documentParseResult.data;

  const cvFactoryUpdateDocument = {
    id,
    ...cvFactoryDocumentData,
  };

  const updateResult = await CvFactory.update(cvFactoryUpdateDocument);
  if (updateResult.status === "not-found") {
    return Response.json(
      {
        payload: undefined,
        message: "CV Document not found",
      },
      { status: 404 }
    );
  }

  return Response.json({
    payload: updateResult.data,
    message: "Updated CV Document",
  });
}
