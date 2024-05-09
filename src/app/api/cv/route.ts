import { starterCvDocument } from "@/constants/cv";
import { CvFactory } from "@/factories/cvFactory";
import { randomUUID } from "crypto";
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

  const { metadata, sections } = starterCvDocument;

  const newCvDocument = {
    metadata,
    sections: sections.map((section) => {
      const id = randomUUID();
      switch (section.type) {
        case "header": {
          return {
            ...section,
            id,
          };
        }
        case "standard": {
          const content = section.content.map((content) => {
            const contentId = randomUUID();
            switch (content.type) {
              case "list": {
                const items = content.items.map((item) => ({
                  ...item,
                  id: randomUUID(),
                }));
                return {
                  ...content,
                  id: contentId,
                  items,
                };
              }
              default: {
                return {
                  ...content,
                  id: contentId,
                };
              }
            }
          });
          return {
            ...section,
            content,
            id,
          };
        }
      }
    }),
  };

  const createResult = await CvFactory.create(newCvDocument);

  return Response.json(
    {
      payload: createResult.data,
      message: "Created new CV Document",
    },
    { status: 201 }
  );
}
