import {
  PRECEDENCE_GROUPS,
  SHORT_HAND_PROPERTIES,
  SHORT_HAND_PROPERTIES_SECOND_LINE
} from '../properties/availableProperties';

const addedShortProperties = new Set();
const addedShortPropertiesSecondLine = new Set();
const addedLonghandByShorthand = new Map();
const shortHandProperties = new Set(SHORT_HAND_PROPERTIES);
const shortHandPropertiesSecondLine = new Set(
  SHORT_HAND_PROPERTIES_SECOND_LINE
);

const getPrecedence = (property: string) => {
  let precedence = 1;

  const shortHandProperty = shortHandProperties.has(property) && property;
  const shortHandPropertySecondLine =
    shortHandPropertiesSecondLine.has(property) && property;

  /**
   *  returns i.e. "border" for "borderColor"
   */
  const precedenceFamily = PRECEDENCE_GROUPS[property];

  const usedShortProperty = addedShortProperties.has(precedenceFamily);
  const usedShortPropertySecondLine = addedShortPropertiesSecondLine.has(
    precedenceFamily
  );

  if (usedShortProperty) {
    ++precedence;
  }
  if (usedShortPropertySecondLine) {
    ++precedence;
  }

  /**
   *  If more specific CSS property has already been added to the stylesheet, then add it again and multiply className.
   */
  let updateStyleSheet;
  const longhandAlreadyAdded = addedLonghandByShorthand.get(property);
  if (
    longhandAlreadyAdded &&
    (shortHandProperty || shortHandPropertySecondLine)
  ) {
    updateStyleSheet = longhandAlreadyAdded;
  }

  shortHandProperty && addedShortProperties.add(property);
  shortHandPropertySecondLine && addedShortPropertiesSecondLine.add(property);
  precedenceFamily && addedLonghandByShorthand.set(precedenceFamily, property);

  return {
    precedence,
    itemAffectedByPrecedence: precedenceFamily && !longhandAlreadyAdded,
    updateStyleSheet
  };
};

export default getPrecedence;
