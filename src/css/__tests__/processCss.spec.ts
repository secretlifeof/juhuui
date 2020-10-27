// @ts-nocheck
import { processCss } from '../processCss';

describe('processCSS', () => {
  test('no props, no valid', () => {
    expect(processCss({ css: {} }).classNames.length).toBe(0);
  });
  test('two props, no valid', () => {
    const props = { css: { queen: 'yes', kind: 'yes' } };
    expect(processCss(props).classNames.length).toBe(2);
  });
  test('two props, one valid', () => {
    const props = { css: { color: 'green', kind: 'yes' } };
    expect(processCss(props).classNames.length).toBe(2);
  });
  test('two props, two valid', () => {
    const props = { css: { color: 'green', bg: 'black' } };
    expect(processCss(props).classNames.length).toBe(2);
  });
});
