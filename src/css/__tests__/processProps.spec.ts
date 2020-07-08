import processProps from '../processProps';

describe('processProps', () => {
  test('no props, no valid', () => {
    expect(processProps({}).classNames.length).toBe(0);
    // returns 2 because of children and as
    expect(Object.values(processProps({}).returnProps).length).toBe(2);
  });
  test('two props, no valid', () => {
    const props = { queen: 'yes', kind: 'yes' };
    expect(processProps(props).classNames.length).toBe(0);
    expect(Object.values(processProps(props).returnProps).length).toBe(4);
  });
  test('two props, one valid', () => {
    const props = { color: 'green', kind: 'yes' };
    expect(processProps(props).classNames.length).toBe(1);
    expect(Object.values(processProps(props).returnProps).length).toBe(3);
  });
  test('two props, two valid', () => {
    const props = { color: 'green', bg: 'black' };
    expect(processProps(props).classNames.length).toBe(2);
    expect(Object.values(processProps(props).returnProps).length).toBe(2);
  });
});
