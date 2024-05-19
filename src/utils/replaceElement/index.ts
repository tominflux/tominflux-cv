export function replaceElement<T = unknown>(
  array: T[],
  index: number,
  value: T
) {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}
