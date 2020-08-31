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

const Heading = ((props: CSSRules): Render => {
  return headingInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Heading, headingInstance);

Heading.displayName = 'Heading';

export default Heading;
