import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const headingInstance = new Base({
  as: 'h2',
  baseStyles: {
    lineHeight: 'shorter'
  }
});

export type Props = CSSRules | P;

/**
 * H2 Element.
 * @returns JSX Element
 * @param as - Set tag name i.e. "h3"
 * @example
 * <Heading>
 *  Wonderperson
 * </Heading>
 */
const Heading = ((props: Props): Render =>
  headingInstance.render(props)) as ComponentType<P>;

attachMethodsToInstance(Heading, headingInstance);

Heading.displayName = 'Heading';

export default Heading;
