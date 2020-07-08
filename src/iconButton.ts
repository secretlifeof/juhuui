import { baseStyle, sizes } from './button';
import base, { Base } from './system/base';
import { themeInternal as theme } from './system/setup';
import createElement from './utilities/createElementFromString';

interface Props {
	activeColor: string;
	name: string;
	buttonSize: string;
	hoverColor: string;
	pseudo: object;
	svg: string;
	variant: string;
	variantColor: string;
	rest: any;
}

function IconButton(
	{
		activeColor = '',
		buttonSize = 'md',
		hoverColor = '',
		name = 'moon',
		pseudo: pseudoIn = {},
		svg,

		...rest
	}: Props,
	ref: object
): Base {
	const themeSvg = theme.icons[name];
	// @ts-ignore
	const child = createElement(svg || themeSvg);

	const style = {
		borderRadius: 'md',
		fontWeight: 'semibold',
		'aria-hidden': 'true',
		...baseStyle,
		...sizes[buttonSize],
		_hover: {
			background: hoverColor
		},
		_active: {
			background: activeColor
		},
		...rest
	};

	const pseudo = {
		'& > svg': {
			width: 'auto',
			height: '100%',
			display: 'block'
		},
		...pseudoIn
	};

	return base(
		{ ...style, fun: true, pseudo, as: 'button', ...rest },
		ref,
		undefined,
		child
	);
}

IconButton.displayName = 'IconButton';

export default IconButton;
