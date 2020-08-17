import { init } from '../pages/_app';
import '../pages/_app';

function test() {
  this.bla = init.forwardRef;
}

export default test;
