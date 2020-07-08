import { NestedPseudo } from './css/processProps';
import base, { Base } from './system/base';

interface Props {
	fun: boolean;
	pseudo: NestedPseudo;
	tagSize: string;
	rest: any;
}

interface Sizes {
	[key: string]: {
		[key: string]: string | number;
	};
}

const sizes: Sizes = {
	sm: {
		minHeight: 6,
		minWidth: 6,
		fontSize: 'sm',
		px: 2
	},
	md: {
		minHeight: 7,
		minWidth: 7,
		fontSize: 'md',
		px: 2
	},
	lg: {
		minHeight: 8,
		minWidth: 8,
		px: 3
	}
};

function Tag(
	{ tagSize = 'lg', pseudo: pseudoIn = {}, ...rest }: Props,
	ref: object
): Base {
	const style = {
		bg: 'gray.200',
		display: 'inline-flex',
		alignItems: 'center',
		rounded: 'md',
		fontWeight: 'medium'
	};

	const pseudo = {
		'& > svg': {
			width: '0.7em',
			height: '0.7em',
			marginRight: '0.4em'
		},
		'& > svg:last-child': {
			marginRight: '0em',
			marginLeft: '0.4em'
		},
		'& > button > svg': {
			display: 'inline-block',
			width: '100%',
			height: '100%'
		},
		'& > button:first-child': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '1em',
			height: '1em',
			marginRight: '0.4em',
			padding: '0.1em',
			minWidth: '1em'
		},
		'& > button:last-child': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '1em',
			height: '1em',
			marginLeft: '0.4em',
			padding: '0.1em',
			minWidth: '1em'
		},
		...pseudoIn
	};

	return base({ ...sizes[tagSize], ...style, pseudo, ...rest }, ref);
}

Tag.displayName = 'Tag';

export default Tag;
