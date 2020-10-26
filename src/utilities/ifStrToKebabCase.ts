export const ifStrToKebabCase = (
  input: string | string[]
): string | string[] => {
  return typeof input === 'string'
    ? input.replace(/[A-Z]/g, ([letter]: string) => `-${letter.toLowerCase()}`)
    : input;
};
