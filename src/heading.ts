import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Heading(props: any): Base {
  const style = {
    as: 'h2',
    lineHeight: 'shorter',
    // fontWeight: 'bold',
    fontFamily: 'heading'
  };

  return base({ ...style, ...props });
}

Heading.with = withHelper(Heading);

Heading.displayName = 'Heading';

export default Heading;
