export function respondNotFound() {
  return Response.json(
    {
      payload: undefined,
      message: "Not found",
    },
    { status: 404 }
  );
}
