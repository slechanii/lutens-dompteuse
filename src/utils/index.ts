export function noNulls<T>(items: (T | null)[]): T[] {
  return items.filter((x): x is T => x !== null);
}
