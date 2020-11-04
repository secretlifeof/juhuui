// @ts-nocheck

/**
 * Regex is taken from https://github.com/kripod/otion/blob/main/packages/otion/src/propertyMatchers.ts.
 * Great thanks to Kripod for taking the time to write this.
 */

const PROPERTIES_CORRECTION_GROUPS = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/;

// left || right || top || bottom || || flex || transition || font || margin || text-decoration || background || animation || grid
// const PROPERTIES_THAT_NEED_CORRECTION = /(-le|-ri|-to|ot|flex|nsit|-fo|-mar|pl|t-d|ckg|an|gr)/;
// const SHORT_HAND_PROPERTIES = /(ani|ba|bor|mns|fle|fon|gr|ma|pa|nsi)/;

const NEEDS_SPECIFICITY = /(-le|-ri|-to|ot|flex|nsit|-fo|-mar|pl|t-d|ckg|an|gr|ali|jus)|(ani|ba|bor|mns|fle|fon|gr|ma|pa|nsi)/;

/**
 * :hover || :active || :focus | :focus-visible | :read-only | :disabled
 */
const PSEUDO_SPECIFICITY = /(:h)|(:ac)|(:fo)|(:read-o)|(:d)/g;

const getPrecedence = (property: string, selector: string) => {
  let precedence = 1;

  const correction = PROPERTIES_CORRECTION_GROUPS.exec(property) || [];
  const specificity = NEEDS_SPECIFICITY.exec(property) || [];

  const higherSpecificity = correction[1];
  const lowerSpecificity = correction[2];
  const needsSpecificity = specificity[1];
  const isShortHand = specificity[2];
  const combinedOfWordsLength = property.match(/-/g);

  /**
   * Find specificity for a pseudo string
   */
  let pseudoSpecificityResult = PSEUDO_SPECIFICITY.exec(selector);
  let runner = PSEUDO_SPECIFICITY.exec(selector);
  while (runner !== null) {
    const regexResult = PSEUDO_SPECIFICITY.exec(selector);
    if (regexResult) {
      pseudoSpecificityResult = regexResult;
    }
    runner = regexResult;
  }
  /**
   * Filters relevant groups from array and find the first value not undefined
   */
  const pseudoSpecificity = (pseudoSpecificityResult ?? [])
    .slice(1, 6)
    .findIndex((el) => !!el);

  const usePrecedence = !!(
    (!combinedOfWordsLength && isShortHand) ||
    (needsSpecificity && combinedOfWordsLength)
  );

  if (usePrecedence) {
    precedence +=
      ((needsSpecificity && combinedOfWordsLength) || []).length +
      (higherSpecificity ? 1 : 0) -
      (lowerSpecificity ? 1 : 0) +
      Math.max(pseudoSpecificity, 0);
  }

  return precedence;
};

export default getPrecedence;
