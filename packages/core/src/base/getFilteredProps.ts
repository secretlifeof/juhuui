import {
  CSSShortProperties,
  getShortProperty
} from '../properties/getShortProperty';

function getFilteredProps(
  filteredProps: any,
  filter: Array<string | CSSShortProperties>
) {
  const result = Object.entries(filteredProps).reduce((acc, [key, val]) => {
    const property = getShortProperty(key);
    const singleProperty = Array.isArray(property) ? property[0] : property;

    if (!filter.includes(singleProperty as string)) {
      return { ...acc, [key]: val };
    }
    return acc;
  }, {});

  return result;
}

export default getFilteredProps;
