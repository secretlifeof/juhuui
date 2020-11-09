import { getStyleTag } from '../getStyleTag';

describe('getStyleTag', () => {
  test('get', () => {
    expect(getStyleTag().nodeType).toBe(1);
  });
  test('reuse sheet', () => {
    const firstRun = getStyleTag();
    const secondRun = getStyleTag();
    expect(firstRun === secondRun).toBeTruthy();
  });
  test('tag name', () => {
    const element = getStyleTag();
    expect(element.getAttribute('id')).toMatch('_juhuui');
  });
});
