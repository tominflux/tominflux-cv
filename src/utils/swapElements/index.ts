export function swapElements<T = unknown>(
  array: T[],
  index1: number,
  index2: number
) {
  return array.map((element, index) => {
    if (index === index1) return array[index2];
    if (index === index2) return array[index1];
    return element;
  });
}
