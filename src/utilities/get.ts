/**
 *  Get object by string
 *
 */

export default (
	object: any,
	path: string,
	defaultVal?: string | number
): object => {
	return (
		path
			.replace(/\[|\]\.?/g, '.')
			.split('.')
			// .filter(s => s)
			.reduce((acc, val) => acc && acc[val], object) || defaultVal
	);
	// const path = key.replace(/\[("|')?([^[\]]+)\1\]/g, '.$2').split('.');
	// let index = 0;
	// while (object && path.length > index) {
	//   object = object[path[index++]];
	// }
	// return object || defaultVal;
};
