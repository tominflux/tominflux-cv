import { ApiContext } from "@/types/API";
import { NextRequest } from "next/server";
import { ZodSchema } from "zod";
import { parseRequest } from "../parseRequest";
import { respondToParsingError } from "../respondToParsingError";
import { respondToPayloadError } from "../respondToPayloadError";

export type EndpointParams<Q, B, P> = {
  handler: EndpointHandler<Q, B, P>;
  querySchema: ZodSchema<Q>;
  bodySchema: ZodSchema<B>;
  payloadSchema: ZodSchema<P>;
};

export type EndpointHandlerSuccessResult<P> = {
  success: true;
  payload: P;
  message: string;
  status?: number;
};
export type EndpointHandlerErrorResult = {
  success: false;
  payload: undefined;
  message: string;
  status?: number;
};
export type EndpointHandlerResult<P> =
  | EndpointHandlerSuccessResult<P>
  | EndpointHandlerErrorResult;

export type EndpointHandler<Q, B, P> = (
  query: Q,
  body: B,
  context: ApiContext
) => Promise<EndpointHandlerResult<P>>;

export function endpoint<Q, B, P>({
  handler,
  querySchema,
  bodySchema,
  payloadSchema,
}: EndpointParams<Q, B, P>) {
  const wrappedRequestHandler = async (
    request: NextRequest,
    { params }: { params: Record<string | number | symbol, unknown> }
  ) => {
    const parseRequestResult = await parseRequest({
      request,
      params,
      querySchema,
      bodySchema,
    });
    if (parseRequestResult.status !== "success") {
      return respondToParsingError(parseRequestResult);
    }
    const { query, body } = parseRequestResult;

    const result = await handler(query, body, {});

    if (!result.success) {
      return Response.json(
        {
          payload: undefined,
          message: result.message,
        },
        {
          status: result.status ?? 500,
        }
      );
    }

    const parsePayloadResult = payloadSchema.safeParse(result.payload);
    if (!parsePayloadResult.success) {
      return respondToPayloadError();
    }

    return Response.json(
      {
        payload: result.payload,
        message: result.message,
      },
      {
        status: result.status ?? 200,
      }
    );
  };
  return wrappedRequestHandler;
}
