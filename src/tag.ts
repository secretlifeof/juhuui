import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { NestedPseudo } from './css/processCss';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  fun?: boolean;
  pseudo?: NestedPseudo;
  [key: string]: any;
}

type Props = P & CSSRules;

const sizeStyles = {
  minHeight: 7,
  minWidth: 7,
  fontSize: 'md',
  px: 2
};

const tagInstance = new Base({
  ...sizeStyles,
  bg: 'gray.200',
  display: 'inline-flex',
  alignItems: 'center',
  rounded: 'md',
  fontWeight: 'medium',
  '& > svg': {
    width: '0.7em',
    height: '0.7em',
    marginRight: '0.4em'
  },
  '& > svg:last-child': {
    marginRight: '0em',
    marginLeft: '0.4em'
  },
  '& > button > svg': {
    display: 'inline-block',
    width: '100%',
    height: '100%'
  },
  '& > button:first-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    marginRight: '0.4em',
    padding: '0.1em',
    minWidth: '1em'
  },
  '& > button:last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    marginLeft: '0.4em',
    padding: '0.1em',
    minWidth: '1em'
  }
});

/**
 * Text/SVG tags with some default styling .
 * @returns JSX Element
 * @example
 * <Tag>Hello</Tag>
 * <Tag><Icon name="moon" /></Tag>
 */
const Tag = ((props: Props): Render => {
  return tagInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Tag, tagInstance);

Tag.displayName = 'Tag';

export default Tag;
