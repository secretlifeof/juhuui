// @ts-nocheck

const getPrecedence = (property: string) => {
  let precedence = 1;

  /**
   * Regex is taken from https://github.com/kripod/otion/blob/main/packages/otion/src/propertyMatchers.ts.
   * Great thanks to Kripod for taking his time to write this.
   */

  const PROPERTIES_CORRECTION = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/;

  const correction = PROPERTIES_CORRECTION.exec(property);
  precedence +=
    (property.match(/-/g) || []).length +
    (correction && correction[1] ? 1 : 0) -
    (correction && correction[2] ? 1 : 0);

  return {
    precedence
  };
};

export default getPrecedence;
