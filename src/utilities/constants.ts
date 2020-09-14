export const isObject = (item: any): boolean =>
  item !== null && typeof item === 'object' && !Array.isArray(item);
