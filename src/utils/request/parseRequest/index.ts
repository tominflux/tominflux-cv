import { NextRequest } from "next/server";
import { ZodObject, ZodSchema } from "zod";

export interface ParseRequestParams<Q, B> {
  request: NextRequest;
  params: Record<string | number | symbol, unknown>;
  querySchema: ZodSchema<Q>;
  bodySchema: ZodSchema<B>;
}

export type ParseRequestResultInvalidQuery = { status: "invalid-query" };
export type ParseRequestResultInvalidBody = { status: "invalid-body" };
export type ParseRequestResultSuccess<Q, B> = {
  status: "success";
  query: Q;
  body: B;
};

export type ParseRequestResult<Q, B> =
  | ParseRequestResultInvalidQuery
  | ParseRequestResultInvalidBody
  | ParseRequestResultSuccess<Q, B>;

export async function parseRequest<Q, B>({
  request,
  params,
  querySchema,
  bodySchema,
}: ParseRequestParams<Q, B>): Promise<ParseRequestResult<Q, B>> {
  const unparsedQuery = {
    ...params,
    ...request.nextUrl.searchParams,
  };
  const queryParseResult = querySchema.safeParse(unparsedQuery);
  if (!queryParseResult.success) {
    console.error(queryParseResult.error.toString());
    return {
      status: "invalid-query",
    };
  }
  const query = queryParseResult.data;

  const unparsedBody = request.bodyUsed ? await request.json() : {};
  const bodyParseResult = bodySchema.safeParse(unparsedBody);
  if (!bodyParseResult.success) {
    console.error(bodyParseResult.error.toString());
    return {
      status: "invalid-body",
    };
  }
  const body = bodyParseResult.data;

  return {
    status: "success",
    query,
    body,
  };
}
