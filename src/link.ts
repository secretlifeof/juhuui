import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const linkInstance = new Base({
  as: 'a'
});

/**
 * Box with as="a"
 * @param as - Set tag i.e. "Link" from Gatsby
 * @returns JSX Element
 * @example
 * <Link href="http://...">Space</Link>
 */
const Link = ((props: CSSRules): Render => {
  return linkInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Link, linkInstance);

Link.displayName = 'Link';

export default Link;
