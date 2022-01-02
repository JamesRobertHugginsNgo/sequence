const sequence = (() => {
	let counter = 0;
	return (prefix, suffix, separator = '') => {
		prefix = prefix ? `${prefix}${separator}`: '';
		suffix = suffix ? `${separator}${suffix}`: '';
		return `${prefix}${counter++}${suffix}`;
	};
})();

/* @if MODULE="COMMONJS" */
module.exports = sequence;
/* @endif */
/* @if MODULE!="COMMONJS" && MODULE!="ES6" **
/* exported sequence */
/* @endif */
/* @if MODULE="ES6" **
export default sequence;
/* @endif */
