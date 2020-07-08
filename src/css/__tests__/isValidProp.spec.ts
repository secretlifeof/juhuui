import isValidProp from '../isValidProp';

describe('isValidProp', () => {
  test('valid single property', () => {
    expect(isValidProp('fontFamily', false)).toEqual({
      fun: false,
      property: 'font-family',
    });
  });
  test('valid single(:) pseudo property', () => {
    expect(isValidProp('_hover', true)).toEqual({
      fun: true,
      property: '&:hover',
    });
  });
  test('valid double(::) pseudo property', () => {
    expect(isValidProp('_after', true)).toEqual({
      fun: true,
      property: '&::after',
    });
  });
  test('valid short property', () => {
    expect(isValidProp('mx', false)).toEqual({
      fun: false,
      property: ['margin-left', 'margin-right'],
    });
    expect(isValidProp('mx', true)).toEqual({
      fun: false,
      property: ['margin-left', 'margin-right'],
    });
  });
  test('not valid property', () => {
    expect(isValidProp('blabla', false)).toEqual({
      fun: false,
      property: false,
    });
    expect(isValidProp('blabla', true)).toEqual({
      fun: false,
      property: false,
    });
  });
});
