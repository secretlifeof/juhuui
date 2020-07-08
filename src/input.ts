import base, { Base } from './system/base';

interface Props {
	size: string | number;
	variant: string;
	rest: any;
}

interface InputSizes {
	[key: string]: {
		[key: string]: string | number;
	};
}

export const inputSizes: InputSizes = {
	lg: {
		fontSize: 'lg',
		px: 4,
		height: 12,
		rounded: 'md'
	},
	md: {
		fontSize: 'md',
		px: 4,
		height: 10,
		rounded: 'md'
	},
	sm: {
		fontSize: 'sm',
		px: 3,
		height: 8,
		rounded: 'sm'
	}
};

const baseStyle = {
	display: 'flex',
	alignItems: 'center',
	position: 'relative',
	transition: 'all 0.2s',
	outline: 'none',
	appearance: 'none',
	width: '100%'
};

// const _readOnly = {
//   bg: 'transparent',
//   boxShadow: 'none !important',
//   userSelect: 'all',
// };

function Input({ size = 'md', ...rest }: Props, ref: object): Base {
	const style = {
		...baseStyle,
		...inputSizes[size]
	};
	return base({ ...style, fun: true, as: 'input', ...rest }, ref);
}

Input.displayName = 'Input';

export default Input;
