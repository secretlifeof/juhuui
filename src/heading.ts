import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const headingInstance = new Base({
  as: 'h2',
  lineHeight: 'shorter',
  // fontWeight: 'bold',
  fontFamily: 'heading'
});

/**
 * H2 Element.
 * @returns JSX Element
 * @param as - Set tag name i.e. "h3"
 * @example
 * <Heading>
 *  Wonderperson
 * </Heading>
 */
const Heading = ((props: CSSRules): Render => {
  return headingInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Heading, headingInstance);

Heading.displayName = 'Heading';

export default Heading;
