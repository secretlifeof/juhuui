import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

interface ListItemProps {
  spacing: string | number;
}

interface ListProps {
  spacing: string | number;
  styleType: string;
  pseudo: any;
}

const listItemInstance = new Base(
  ({ spacing = 0 }: ListItemProps) => ({ as: 'li', marginBottom: spacing }),
  ['spacing']
);

export function ListItem(props: any): Base {
  return listItemInstance.render(props);
}

attachMethodsToInstance(ListItem, listItemInstance);
ListItem.displayName = 'ListItem';

const listInstance = new Base(
  ({ spacing = 0, styleType = 'disc', pseudo = {} }: ListProps) => ({
    as: 'ul',
    listStyleType: styleType,
    listStylePosition: 'inside',
    pseudo: {
      '& li': {
        marginBottom: spacing
      },
      '& li > span > svg': {
        size: '0.7em',
        marginRight: '0.4em'
      },
      ...pseudo
    }
  }),
  ['spacing']
);

function List(props: any): Render {
  return listInstance.render(props);
}

attachMethodsToInstance(List, listInstance);
List.displayName = 'List';

export default List;
