import base, { Base } from './system/base';


function Fun(props: any, ref: object) : Base {
  return base({ fun: true, ...props }, ref);
}

export default Fun;
