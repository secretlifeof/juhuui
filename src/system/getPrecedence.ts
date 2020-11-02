// @ts-nocheck

/**
 * Regex is taken from https://github.com/kripod/otion/blob/main/packages/otion/src/propertyMatchers.ts.
 * Great thanks to Kripod for taking the time to write this.
 */

const PROPERTIES_CORRECTION_GROUPS = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl)|(-le|-ri|-to|ot|flex|nsit|-fo|-mar|pl|t-d|ckg|an|gr|ali|jus)|(ani|ba|bor|mns|fle|fon|gr|ma|pa|nsi))/;

// left || right || top || bottom || || flex || transition || font || margin || text-decoration || background || animation || grid
// const PROPERTIES_THAT_NEED_CORRECTION = /(-le|-ri|-to|ot|flex|nsit|-fo|-mar|pl|t-d|ckg|an|gr)/;
// const SHORT_HAND_PROPERTIES = /(ani|ba|bor|mns|fle|fon|gr|ma|pa|nsi)/;

const NEEDS_SPECIFICITY = /(-le|-ri|-to|ot|flex|nsit|-fo|-mar|pl|t-d|ckg|an|gr|ali|jus)|(ani|ba|bor|mns|fle|fon|gr|ma|pa|nsi)/;

const getPrecedence = (property: string) => {
  let precedence = 1;

  const correction = PROPERTIES_CORRECTION_GROUPS.exec(property) || [];
  const specificity = NEEDS_SPECIFICITY.exec(property) || [];

  const higherSpecificity = correction[1];
  const lowerSpecificity = correction[2];
  const needsSpecificity = specificity[0];
  const isShortHand = specificity[1];
  const combinedOfWordsLength = property.match(/-/g);

  const usePrecedence = !!(
    (!combinedOfWordsLength && isShortHand) ||
    (needsSpecificity && combinedOfWordsLength)
  );

  if (usePrecedence) {
    precedence +=
      ((needsSpecificity && combinedOfWordsLength) || []).length +
      (higherSpecificity ? 1 : 0) -
      (lowerSpecificity ? 1 : 0);
  }

  return precedence;
};

export default getPrecedence;
