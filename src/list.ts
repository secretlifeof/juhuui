// @ts-nocheck
import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface ListItemP {
  spacing?: string | number;
  [key: string]: any;
}

interface ListP {
  spacing?: string | number;
  styleType?: string;
  pseudo?: any;
  [key: string]: any;
}

type ListProps = ListP & CSSRules;
type ListItemProps = ListItemP & CSSRules;

const listItemInstance = new Base(
  ({ spacing = 0 }: ListItemProps) => ({ as: 'li', marginBottom: spacing }),
  ['spacing']
);

/**
 * List item
 * @param spacing - Margin bottom
 * @returns JSX Element
 * @example
 * <List>
 *  <ListItem>One</ListItem>
 * </List>
 */
export const ListItem = ((props: ListProps): Render => {
  return listItemInstance.render(props);
}) as ComponentType<ListItemP>;

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
  ['spacing', 'styleType']
);

/**
 * Unordered list
 * @param as - Tag i.e. 'ol'
 * @param spacing - margin-bottom between children
 * @param styleType - list-style-type
 * @returns JSX Element
 * @example
 * <List>
 *  <ListItem>One</ListItem>
 * </List>
 */
const List = ((props: ListItemProps): Render => {
  return listInstance.render(props);
}) as ComponentType<ListP>;

attachMethodsToInstance(List, listInstance);
List.displayName = 'List';

export default List;
