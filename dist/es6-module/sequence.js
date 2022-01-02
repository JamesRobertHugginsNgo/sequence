const sequence = (() => {
	let counter = 0;
	return (prefix, suffix, separator = '') => {
		prefix = prefix ? `${prefix}${separator}`: '';
		suffix = suffix ? `${separator}${suffix}`: '';
		return `${prefix}${counter++}${suffix}`;
	};
})();

export default sequence;
