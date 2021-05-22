/**
 *  Get object by string
 *
 */

export default (
  object: any,
  path: string,
  defaultVal?: string | number
): object =>
  path
    .replace(/\[|\]\.?/g, '.')
    .split('.')
    .filter(Boolean)
    .reduce((acc, val) => acc && acc[val], object) || defaultVal;
