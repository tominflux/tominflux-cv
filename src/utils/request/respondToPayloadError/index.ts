export function respondToPayloadError() {
  return Response.json(
    {
      payload: undefined,
      message: "Invalid response payload",
    },
    { status: 500 }
  );
}
