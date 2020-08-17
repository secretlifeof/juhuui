import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const headingInstance = new Base({
  as: 'h2',
  lineHeight: 'shorter',
  // fontWeight: 'bold',
  fontFamily: 'heading'
});

function Heading(props: any): Render {
  return headingInstance.render(props);
}

attachMethodsToInstance(Heading, headingInstance);

Heading.displayName = 'Heading';

export default Heading;
