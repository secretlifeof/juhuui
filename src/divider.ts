import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

export interface Props extends CSSRules {
  fun: boolean;
  orientation: string;
}

const dividerInstance = new Base(
  ({ fun, orientation }: Props) => ({
    'aria-orientation': orientation,
    border: '0',
    borderColor: 'inherit',
    fun,
    opacity: '0.6',
    height: 0,
    ...(orientation === 'vertical'
      ? {
          borderLeft: '0.0625rem solid',
          height: 'auto',
          mx: 2
        }
      : { borderTop: '1px solid', width: '100%', my: 2 }),
    as: orientation === 'vertical' ? 'div' : 'hr'
  }),
  ['orientation']
);

function Divider(props: any): Render {
  return dividerInstance.render(props);
}

attachMethodsToInstance(Divider as ComponentType, dividerInstance);

Divider.displayName = 'Divider';

export default Divider;
