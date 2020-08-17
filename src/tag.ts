import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { NestedPseudo } from './css/processProps';
import { Render } from './system/render';

interface Props {
  fun: boolean;
  pseudo: NestedPseudo;
  tagSize: string;
  rest: any;
}

const sizeStyles = {
  minHeight: 7,
  minWidth: 7,
  fontSize: 'md',
  px: 2
};

const tagInstance = new Base(({ pseudo }: Props) => ({
  ...sizeStyles,
  bg: 'gray.200',
  display: 'inline-flex',
  alignItems: 'center',
  rounded: 'md',
  fontWeight: 'medium',
  pseudo: {
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
    },
    ...pseudo
  }
}));

function Tag(props: any): Render {
  return tagInstance.render(props);
}

attachMethodsToInstance(Tag, tagInstance);

Tag.displayName = 'Tag';

export default Tag;
