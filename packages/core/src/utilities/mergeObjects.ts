import { isObject } from './constants';

interface IObject {
  [key: string]: any;
}

const mergeObjects = (target: IObject, ...sources: IObject[]) => {
  if (!sources.length) {
    return target;
  }
  const result: IObject = target;

  const len: number = sources.length;
  for (let i = 0; i < len; i += 1) {
    const elm: any = sources[i];

    const elmKeys = Object.keys(elm);
    for (let j = 0; j < elmKeys.length; j += 1) {
      const key = elmKeys[j];
      if (isObject(elm[key])) {
        if (!result[key] || !isObject(result[key])) {
          result[key] = {};
        }
        mergeObjects(result[key], elm[key]);
      } else {
        result[key] = elm[key];
      }
    }
  }

  return result;
};

export default mergeObjects;
