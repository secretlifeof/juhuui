import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface ListItemP {
  spacing: string | number;
}

interface ListP {
  spacing: string | number;
  styleType: string;
  pseudo: any;
}

type ListProps = ListP & CSSRules;
type ListItemProps = ListItemP & CSSRules;

const listItemInstance = new Base(
  ({ spacing = 0 }: ListItemProps) => ({ as: 'li', marginBottom: spacing }),
  ['spacing']
);

export const ListItem = ((props: ListProps): Render => {
  return listItemInstance.render(props);
}) as ComponentType;

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

const List = ((props: ListItemProps): Render => {
  return listInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(List, listInstance);
List.displayName = 'List';

export default List;
