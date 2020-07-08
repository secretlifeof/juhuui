import { availableProperties, getShortProperty } from '../properties';
import ifStrToKebabCase from '../utilities/ifStrToKebabCase';

const selectorsDouble = [
	'_after',
	'_before',
	'_firstLetter',
	'_firstLine',
	'_selection'
];

const selectorsSingle = [
	'_active',
	'_checked',
	'_default',
	'_disabled',
	'_empty',
	'_enabled',
	'_firstChild',
	'_firstOfType',
	'_focus',
	'_hover',
	'_inRange',
	'_indeterminate',
	'_invalid',
	'_lastChild',
	'_lastOfType',
	'_link',
	'_onlyOfType',
	'_onlyChild',
	'_optional',
	'_outOfRange',
	'_readOnly',
	'_readWrite',
	'_required',
	// '_root',
	'_target',
	'_valid',
	'_visited'
];

interface ValidProp {
	property: string | string[] | false;
	fun: boolean;
}

/**
 * Checks all props if they are valid to be processed by juhuui
 */

const isValidProp = () => {
	const CACHE = new Map();

	return (propName: string, fun: boolean): ValidProp => {
		const cachedProperty: ValidProp = CACHE.get(propName);

		if (cachedProperty) {
			return cachedProperty;
		}

		if (fun) {
			const property =
				(selectorsDouble.includes(propName) &&
					`&::${propName.replace('_', '')}`) ||
				(selectorsSingle.includes(propName) &&
					`&:${propName.replace('_', '')}`) ||
				(propName === 'pseudo' && 'pseudo') ||
				false;

			if (property) {
				const valid = { property, fun: true };
				CACHE.set(propName, valid);
				return valid;
			}
		}

		let property =
			(!Array.isArray(propName) &&
				((availableProperties.has(propName) && propName) ||
					getShortProperty(propName) ||
					(propName.includes('j_') && propName.replace('j_', '')))) ||
			false;

		property = property && ifStrToKebabCase(property);

		if (property) {
			const valid = { property, fun: false };
			CACHE.set(propName, valid);
			return valid;
		}

		return { property: false, fun: false };
	};
};

export default isValidProp();
