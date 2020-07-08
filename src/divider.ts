import base, { Base } from './system/base';

interface Props {
	fun: boolean;
	orientation: string;
	rest: object;
}

function Divider(
	{ orientation = 'horizontal', ...rest }: Props,
	ref: object
): Base {
	const style = {
		'aria-orientation': orientation,
		border: '0',
		opacity: '0.6'
	};

	const orientationStyle =
		orientation === 'vertical'
			? {
					borderLeft: '0.0625rem solid',
					height: 'auto',
					mx: 2
			  }
			: { borderTop: '0.0625rem solid', width: '100%', my: 2 };

	const tag = orientation === 'vertical' ? 'div' : 'hr';

	return base(
		{ ...style, ...orientationStyle, borderColor: 'inherit', as: tag, ...rest },
		ref
	);
}

export default Divider;
