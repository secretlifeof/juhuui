import createCss from '../createCss';

describe('createCss', () => {
  test('value == null && property == string', () => {
    expect(createCss('display', null)).toEqual('');
  });
  test('value == undefined && property == string', () => {
    expect(createCss('display', undefined)).toEqual('');
  });
  test('value == string && property == string', () => {
    expect(createCss('display', 'none')).toMatch(/\S/);
  });
  test('value == array && property == string', () => {
    const input = ['none', 'initial'];
    expect(createCss('display', input).length).toEqual(2);
  });
  test('value == array && property == array', () => {
    const input = ['10', '20'];
    const properties = ['width', 'height'];
    expect(createCss(properties, input).length).toEqual(
      properties.length + input.length
    );
  });
  test('value == string && property == array', () => {
    const properties = ['width', 'height'];
    expect(createCss(properties, '100%').length).toEqual(properties.length);
  });
});
