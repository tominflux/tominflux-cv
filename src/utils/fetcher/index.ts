export const fetcher = (input: string | URL | Request, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());
