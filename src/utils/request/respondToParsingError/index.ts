import {
  ParseRequestResultInvalidBody,
  ParseRequestResultInvalidQuery,
} from "../parseRequest";

export function respondToParsingError(
  result: ParseRequestResultInvalidQuery | ParseRequestResultInvalidBody
) {
  const getMessage = () => {
    switch (result.status) {
      case "invalid-query":
        return "Invalid params";
      case "invalid-query":
        return "Invalid query";
    }
  };
  return Response.json(
    {
      payload: undefined,
      message: getMessage(),
    },
    { status: 400 }
  );
}
