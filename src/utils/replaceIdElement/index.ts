import { replaceElement } from "../replaceElement";

export function replaceIdElement<T extends { id: string }>(
  array: T[],
  value: T
) {
  const index = array.findIndex((element) => element.id === value.id);
  if (index === -1) return array;
  return replaceElement(array, index, value);
}
