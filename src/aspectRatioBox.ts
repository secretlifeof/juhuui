import base, { Base } from './system/base';

interface Props {
	fun: boolean;
	ratio: number;
	pseudoIn: any;
	rest: any;
	// [key: string]: any;
}

function AspectRatioBox(
	{ fun = true, ratio = 4 / 3, pseudoIn = {}, ...rest }: Props,
	ref: object
): Base {
	const style = {
		position: 'relative'
	};

	const pseudo = {
		'&:before': {
			height: '0',
			content: "''",
			display: 'block',
			paddingBottom: Array.isArray(ratio)
				? ratio.map((r) => `${(1 / r) * 100}%`)
				: `${(1 / ratio) * 100}%`
		},
		'& *:first-child': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0
		},
		...pseudoIn
	};

	return base({ ...style, pseudo, fun, ...rest }, ref);
}

// AspectRatioBox.displayName = 'AspectRatioBox'

export default AspectRatioBox;
