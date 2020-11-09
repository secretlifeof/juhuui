export const ifStrToKebabCase = (input: string): string => {
  return input.replace(
    /[A-Z]/g,
    ([letter]: string) => `-${letter.toLowerCase()}`
  );
};
