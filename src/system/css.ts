import processProps, { Props } from '../css/processProps';

const css = (props: Props): string => {
	const system = processProps(props);
	return system.classNames.join(' ');
};

export default css;
