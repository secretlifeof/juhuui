import processEntries from '../processEntries';

const addClassName = jest.fn();

describe('processEntries', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('string property', () => {
    processEntries('width', '50%', (className) => addClassName(className));
    expect(addClassName.mock.calls.length).toBe(1);
  });
  test('array property', () => {
    processEntries(['width', 'height'], '50%', (className) =>
      addClassName(className)
    );
    expect(addClassName.mock.calls.length).toBe(2);
    expect(addClassName.mock.calls[0][0]).toMatch(/\S/);
  });
});
