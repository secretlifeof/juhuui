import getClassName from '../getClassName';

describe('getClassName', () => {
  test('simple property & value', () => {
    expect(getClassName('background', 'green')).toMatch(/j\S/);
  });
  test('property, value & mediaQuery', () => {
    expect(
      getClassName('background', 'green', 3660, undefined, '(min-width: 800px)')
    ).toMatch(/j\S/);
  });
  test('selector', () => {
    expect(
      getClassName('background', 'green', undefined, '& > div', undefined)
    ).toMatch(/j\S/);
  });
});
