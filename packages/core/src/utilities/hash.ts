// @ts-nocheck

// Thanks to: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript

export const hash = (str: string): string => {
  let h = 9;

  for (let i = str.length; i; ) {
    h = Math.imul(h ^ str.charCodeAt(--i), 0x5f356495);
  }

  return `j-${(h ^ (h >>> 9)) >>> 0}`;
};
