/* global jsTester sequence */

Promise.resolve()
	.then(jsTester('1ST SEQUENCE', function () {
		return sequence();
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '0';
		})
		.promise)
	.then(jsTester('2ND SEQUENCE', function () {
		return sequence();
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '1';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX', function () {
		return sequence('prefix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix2';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SUFFIX', function () {
		return sequence(null, 'suffix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '3suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SUFFIX', function () {
		return sequence('prefix', 'suffix');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix4suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SEPARATOR', function () {
		return sequence('prefix', null, '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix-5';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SUFFIX + SEPARATOR', function () {
		return sequence(null, 'suffix', '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '6-suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH PREFIX + SUFFIX + SEPARATOR', function () {
		return sequence('prefix', 'suffix', '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === 'prefix-7-suffix';
		})
		.promise)
	.then(jsTester('SEQUENCE WITH SEPARATOR', function () {
		return sequence(null, null, '-');
	})
		.test('TEST VALUE', (value) => {
			console.log(value);
			return value === '8';
		})
		.promise)
	.then(function (data) {
		console.log(data);
	}, function (error) {
		console.error(error);
	});
