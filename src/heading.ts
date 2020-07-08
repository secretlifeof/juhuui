import base, { Base } from './system/base';


function Heading(props: any, ref: object) : Base {
  const style = {
    as: 'h2',
    lineHeight: 'shorter',
    // fontWeight: 'bold',
    fontFamily: 'heading',
  };

  return base({ ...style, ...props }, ref);
}

Heading.displayName = 'Heading'

export default Heading;
