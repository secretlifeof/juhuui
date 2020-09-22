/**
 *  List of props processed as css if not on this list
 *  add "j_" before prop name and it will be processed as css
 *
 *  The reason for this list not being complete is performance. Every prop is checked
 *  against this list. Unsure if this matters? Have tried to pick the most used ones.
 */

interface PrecedenceType {
  [key: string]: string;
}

const ANIMATION_ARR = [
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationPlayState',
  'animationTimingFunction'
];
const ANIMATION_GROUP: PrecedenceType = ANIMATION_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'animation'
  }),
  {}
);

const BACKGROUND_ARR = [
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize'
];
const BACKGROUND_GROUP: PrecedenceType = BACKGROUND_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'background'
  }),
  {}
);

const BORDER_ARR = [
  'borderCollapse',
  'borderColor',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderSpacing',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderRightColor',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderLeftColor',
  'borderTopStyle',
  'borderRightStyle',
  'borderBottomStyle',
  'borderLeftStyle',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderLeftWidth'
];
const BORDER_GROUP: PrecedenceType = BORDER_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'border'
  }),
  {}
);

const COLUMN_ARR = ['columnCount', 'columnWidth'];
const COLUMN_GROUP: PrecedenceType = COLUMN_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'columns'
  }),
  {}
);

const FLEX_ARR = [
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap'
];
const FLEX_GROUP: PrecedenceType = FLEX_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'flex'
  }),
  {}
);

const FONT_ARR = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight'];
const FONT_GROUP: PrecedenceType = FONT_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'font'
  }),
  {}
);

const GRID_ARR = [
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',

  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',

  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows'
];
const GRID_GROUP: PrecedenceType = GRID_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'grid'
  }),
  {}
);

const GRID_CENTER_ARR = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'justifyContent',
  'justifyItems',
  'justifySelf'
];
const PLACE_CONTENT_GROUP: PrecedenceType = {
  alignContent: 'placeContent',
  justifyContent: 'placeContent'
};
const PLACE_ITEMS_GROUP: PrecedenceType = {
  alignItems: 'placeItems',
  justifyContent: 'placeItems'
};
const PLACE_SELF_GROUP: PrecedenceType = {
  alignSelf: 'placeSelf',
  justifySelf: 'placeSelf'
};

const MARGIN_ARR = ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'];
const MARGIN_GROUP: PrecedenceType = MARGIN_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'margin'
  }),
  {}
);

const PADDING_ARR = [
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop'
];
const PADDING_GROUP: PrecedenceType = PADDING_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'padding'
  }),
  {}
);

const TEXT_DECORATION_ARR = [
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle'
];
const TEXT_DECORATION_GROUP: PrecedenceType = TEXT_DECORATION_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'textDecoration'
  }),
  {}
);

const TRANSITION_ARR = [
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction'
];
const TRANSITION_GROUP: PrecedenceType = TRANSITION_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'transition'
  }),
  {}
);

const BORDER_SECOND_LINE_ARR = [
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderRadius',
  'borderStyle',
  'borderWidth'
];
const BORDER_SECOND_LINE_GROUP: PrecedenceType = BORDER_SECOND_LINE_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'border'
  }),
  {}
);

const GRID_SECOND_LINE_ARR = [
  // grid-area = grid-row-start + grid-column-start + grid-row-end + grid-column-end
  'gridArea',
  // grid-column = grid-column-end + grid-column-start
  'gridColumn',
  // grid-column = grid-row-end + grid-row-start
  'gridRow'
];
const GRID_SECOND_LINE_GROUP: PrecedenceType = GRID_SECOND_LINE_ARR.reduce(
  (acc, item) => ({
    ...acc,
    [item]: 'grid'
  }),
  {}
);

export const PRECEDENCE_GROUPS = {
  ...ANIMATION_GROUP,
  ...BACKGROUND_GROUP,
  ...BORDER_GROUP,
  ...COLUMN_GROUP,
  ...FLEX_GROUP,
  ...FONT_GROUP,
  ...GRID_GROUP,
  ...MARGIN_GROUP,
  ...PADDING_GROUP,
  ...PLACE_CONTENT_GROUP,
  ...PLACE_ITEMS_GROUP,
  ...PLACE_SELF_GROUP,
  ...TEXT_DECORATION_GROUP,
  ...TRANSITION_GROUP,
  ...BORDER_SECOND_LINE_GROUP,
  ...GRID_SECOND_LINE_GROUP
};

export const SHORT_HAND_PROPERTIES = [
  'animation',
  'background',
  'border',
  // columns = column-count + column-width
  'columns',
  // flex = flex-grow + flex-shrink + flex-basis
  'flex',
  // flex-flow = flex-direction + flex-wrap
  'flexFlow',
  'font',
  'grid',
  'margin',
  'padding',
  // place-content = align-content + justify-content
  'placeContent',
  // place-items = align-items + align-content
  'placeItems',
  // place-self = align-self + justify-self
  'placeSelf',
  'transition',
  'textDecoration'
];

export const SHORT_HAND_PROPERTIES_SECOND_LINE = [
  ...BORDER_SECOND_LINE_ARR,
  ...GRID_SECOND_LINE_ARR
];

export default new Set([
  ...ANIMATION_ARR,
  ...BACKGROUND_ARR,
  ...BORDER_ARR,
  ...COLUMN_ARR,
  ...FLEX_ARR,
  ...FONT_ARR,
  ...GRID_ARR,
  ...GRID_CENTER_ARR,
  ...MARGIN_ARR,
  ...PADDING_ARR,
  ...TEXT_DECORATION_ARR,
  ...TRANSITION_ARR,
  ...SHORT_HAND_PROPERTIES,
  ...SHORT_HAND_PROPERTIES_SECOND_LINE,
  'appearance',
  'all',
  'azimuth',
  // 'backfaceVisibility',
  'bottom',
  // 'boxDecorationBreak',
  'boxShadow',
  'boxSizing',
  // 'breakAfter',
  // 'breakBefore',
  // 'breakInside',
  // 'captionSide',
  // 'caretColor',
  'clear',
  // 'clip',
  'color',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'content',
  'counterIncrement',
  'counterReset',
  'cursor',
  'display',
  // 'direction',
  // 'emptyCells',
  'fill',
  'float',
  // 'hangingPunctuation',
  'height',
  // 'hyphens',
  // 'imageRendering',
  // 'isolation',
  'left',
  'letterSpacing',
  'lineBreak',
  'lineHeight',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'mixBlendMode',
  'objectFit',
  'objectPosition',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overscrollBehavior',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'padding',

  // 'pageBreakAfter',
  // 'pageBreakBefore',
  // 'pageBreakInside',
  'perspective',
  'perspectiveOrigin',
  'pointerEvents',
  'position',
  'stroke',
  // 'quotes',
  'resize',
  'right',
  'scrollBehaviour',
  'strokeDashoffset',
  'strokeWidth',
  'strokeLinecap',
  // 'tabSize',
  // 'tableLayout',
  'textAlign',
  'textAlignLast',
  'textCombineUpright',
  'textIndent',
  'textJustify',
  'textOverflow',
  'textShadow',
  'textTransform',
  // 'textUnderlinePosition',
  'top',
  'transform',
  'transformOrigin',
  'transformStyle',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whiteSpace',
  'width',
  'willChange',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'zIndex'
]);
