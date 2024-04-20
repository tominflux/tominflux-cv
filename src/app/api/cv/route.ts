import { starterCvDocument } from "@/constants/cv";
import { CvFactory } from "@/factories/cvFactory";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const bodyParseResult = z.object({}).safeParse(request.body);
  if (!bodyParseResult.success) {
    return Response.json(
      {
        payload: undefined,
        message: "Invalid body",
      },
      { status: 400 }
    );
  }

  const createResult = await CvFactory.create(starterCvDocument);

  return Response.json(
    {
      payload: createResult.data,
      message: "Created new CV Document",
    },
    { status: 201 }
  );
}
