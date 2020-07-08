import getClassName from '../getClassName';

describe('getClassName', () => {
  test('simple property & value', () => {
    expect(getClassName('background', 'green')).toMatch(/j\S/);
  });
  test('property, value & media', () => {
    expect(
      getClassName('background', 'green', 3660, undefined, [
        'green',
        'blue',
        'brown',
      ])
    ).toMatch(/j\S/);
  });
  test('selector', () => {
    expect(
      getClassName('background', 'green', undefined, '& > div', undefined)
    ).toMatch(/j\S/);
  });
});
