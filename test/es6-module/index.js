import jsTester from '../../node_modules/js-tester/dist/es6-module/js-tester.min.js';
import sequence from '../../dist/es6-module/sequence.min.js';

Promise.resolve()
	.then(jsTester('1ST SEQUENCE', () => {
		return sequence();
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '0';
		})
		.promise)
	.then(jsTester('2ND SEQUENCE', () => {
		return sequence();
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '1';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX', () => {
		return sequence('prefix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix2';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SUFFIX', () => {
		return sequence(null, 'suffix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '3suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SUFFIX', () => {
		return sequence('prefix', 'suffix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix4suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SEPARATOR', () => {
		return sequence('prefix', null, '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix-5';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SUFFIX + SEPARATOR', () => {
		return sequence(null, 'suffix', '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '6-suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SUFFIX + SEPARATOR', () => {
		return sequence('prefix', 'suffix', '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix-7-suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SEPARATOR', () => {
		return sequence(null, null, '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '8';
		})
		.promise)
	.then((data) => {
		console.log(data);
	}, (error) => {
		console.error(error);
	});
