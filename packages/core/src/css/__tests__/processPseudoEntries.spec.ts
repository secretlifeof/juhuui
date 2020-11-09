import processPseudoEntries from '../processPseudoEntries';

describe('processPseudoEntries', () => {
  test('single entry. hover.', () => {
    const entries = { color: 'green' };
    expect(processPseudoEntries({ div: entries }, '&:hover').length).toBe(1);
  });
  test('three entries. hover.', () => {
    const entries = { color: 'green', bg: 'red', display: 'none' };
    expect(processPseudoEntries({ div: entries }, '&:hover').length).toBe(1);
  });
  test('single entry. pseudo prop.', () => {
    const entries = { color: 'green' };
    expect(processPseudoEntries({ div: entries }, '& div').length).toBe(1);
  });
  test('three entries. pseudo prop.', () => {
    const entries = { color: 'green', bg: 'red', display: 'none' };
    expect(processPseudoEntries({ div: entries }, '& div').length).toBe(1);
  });
});
