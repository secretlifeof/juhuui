import base, { Base } from './system/base';

interface ListItemProps {
  spacing: string | number;
  rest: any;
}

interface ListProps {
  spacing: string | number;
  styleType: string;
  pseudo: any;
  rest: any;
}

export function ListItem(
  { spacing = 0, ...rest }: ListItemProps,
  ref: object
) : Base {
  const style = {
    marginBottom: spacing,
  };

  return base({ ...style, as: 'li', ...rest }, ref, 'li');
}

function List(
  {
    pseudo: pseudoIn = {},
    styleType = 'space-counter',
    spacing = 0,
    ...rest
  }: ListProps,
  ref: object
) : Base {
  const style = {
    listStyleType: styleType,
    listStylePosition: 'inside',
  };

  const pseudo = {
    '& li': {
      marginBottom: spacing,
    },
    '& li > span > svg': {
      size: '0.7em',
      marginRight: '0.4em',
    },
    ...pseudoIn,
  };

  return base({ ...style, ...pseudo, fun: true, as: 'ul', ...rest }, ref, 'ul');
}

List.displayName = 'List'

export default List;
