import { isObject } from './constants';

interface IObject {
  [key: string]: any;
}

const mergeObjects = (target: IObject, ...sources: IObject[]) => {
  if (!sources.length) {
    return target;
  }
  const result: IObject = target;
  if (isObject(result)) {
    const len: number = sources.length;

    for (let i = 0; i < len; i += 1) {
      const elm: any = sources[i];

      if (isObject(elm)) {
        const elmKeys = Object.keys(elm);
        for (let j = 0; j < elmKeys.length; j += 1) {
          const key = elmKeys[j];
          if (isObject(elm[key])) {
            if (!result[key] || !isObject(result[key])) {
              result[key] = {};
            }
            mergeObjects(result[key], elm[key]);
          }
          // else if (Array.isArray(result[key]) && Array.isArray(elm[key])) {
          //   // concatenate the two arrays and remove any duplicate primitive values
          //   result[key] = Array.from(new Set(result[key].concat(elm[key])));
          // }
          else {
            result[key] = elm[key];
          }
        }
      }
    }
  }

  return result;
};

export default mergeObjects;
