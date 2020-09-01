// @ts-nocheck

// Thanks to: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript

// const hashCode = (s: string) => {
//   for (var i = 0, h = 0; i < s.length; i++)
//     h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
//   return h;
// };

function hashCode(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    const chr = s.charCodeAt(i);
    h = (h << 5) - h + chr;
    h |= 0; // Convert to 32bit integer
  }
  return h;
}

function hash(str: string): string {
  return `j${hashCode(str)}`;
}

export default hash;
