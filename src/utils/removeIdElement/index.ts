import { removeElement } from "../removeElement";

export function removeIdElement<T extends { id: string }>(
  array: T[],
  id: string
) {
  const index = array.findIndex((element) => element.id === id);
  if (index === -1) return array;
  return removeElement(array, index);
}
