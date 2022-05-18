export type InjectPosition = "before" | "after";

export function inject<T extends (...args: any) => any>(
  position: InjectPosition,
  func: T,
  handler?: (...args: Parameters<T>) => void
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
    if (position === "before") handler?.(...args);
    const result = func(...(args as []));
    if (position === "after") handler?.(...args);
    return result;
  }) as T;
}
