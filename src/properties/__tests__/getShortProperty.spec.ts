import getShortProperty, { CSSShortProperties } from '../getShortProperty';

describe('getShortProperty', () => {
  test('Short property string to css property', () => {
    expect(getShortProperty('d')).toEqual('display');
  });
  test('String that is not a shortcut', () => {
    expect(getShortProperty('blabla' as CSSShortProperties)).toEqual(undefined);
  });
});
