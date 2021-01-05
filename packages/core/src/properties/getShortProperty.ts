/**
 *  Returns properties for shortcuts
 */

export const shortProperties = {
  area: 'gridArea',
  autoFlow: 'gridAutoFlow',
  autoRows: 'gridAutoRows',
  autoColumns: 'gridAutoColumns',
  align: 'alignItems',
  bg: 'backgroundColor',
  bgAttachment: 'backgroundAttachment',
  bgImage: 'backgroundImage',
  bgPos: 'backgroundPosition',
  bgRepeat: 'backgroundRepeat',
  bgSize: 'backgroundSize',
  c: 'color',
  column: 'gridColumn',
  columnGap: 'gridColumnGap',
  d: 'display',
  direction: 'flexDirection',
  flexDir: 'flexDirection',
  gap: 'gridGap',
  h: 'height',
  justify: 'justifyContent',
  m: 'margin',
  mb: 'marginBottom',
  maxH: 'maxHeight',
  maxW: 'maxWidth',
  minH: 'minHeight',
  minW: 'minWidth',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: 'padding',
  pos: 'position',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  rounded: 'border-radius',
  roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  roundedBottomLeft: 'borderBottomLeftRadius',
  roundedBottomRight: 'borderBottomRightRadius',
  roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
  roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
  roundedTopLeft: 'borderTopLeftRadius',
  roundedTopRight: 'borderTopRightRadius',
  row: 'gridRow',
  rowGap: 'gridRowGap',
  size: ['width', 'height'],
  shadow: 'boxShadow',
  templateAreas: 'gridTemplateAreas',
  templateColumns: 'gridTemplateColumns',
  templateRows: 'gridTemplateRows',
  w: 'width',
  wrap: 'flexWrap'
} as const;

type ValueOf<T> = T[keyof T];
export type ShortProperties = typeof shortProperties;
export type CSSShortProperties = keyof ShortProperties;

export const getShortProperty = (
  property: string
): ValueOf<typeof shortProperties> | Array<ValueOf<typeof shortProperties>> =>
  // @ts-ignore
  shortProperties[property] || property;

export default getShortProperty;
