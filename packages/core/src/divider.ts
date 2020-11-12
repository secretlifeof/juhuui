import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

export interface P {
  fun?: boolean;
  orientation?: string;
  [key: string]: any;
}

type Props = P & CSSRules;

const dividerInstance = new Base(
  ({ fun, orientation = 'horizontal' }: Props) => ({
    'aria-orientation': orientation,
    baseStyles: {
      border: '0',
      borderColor: '#C3CEC4',
      fun,
      height: 0,
      ...(orientation === 'vertical'
        ? {
            borderLeft: '1px solid',
            height: 'auto',
            mx: 2
          }
        : { borderTop: '1px solid', width: '100%', my: 2 })
    },
    as: orientation === 'vertical' ? 'div' : 'hr'
  }),
  ['orientation']
);

/**
 * Divide content.
 * @param orientation - vertical|horizontal
 * @returns JSX Element
 * @example
 * <span>A</span><Divider orientation="vertical" /><span>B</span>
 */
const Divider = ((props: Props): Render => {
  return dividerInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Divider, dividerInstance);

Divider.displayName = 'Divider';

export default Divider;
