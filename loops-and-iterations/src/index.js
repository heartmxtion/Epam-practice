/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    // Your implementation here
	let string = "";
	for(x; x<=y;x+=step) x==y ? string+= x : string+= x + ' ';
	return string;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    // Your implementation here
	let sum = 0;
	while(x<=y) {
		for(let i = x; i<=y; i++) sum+= i;
		y--;
	}
	return sum;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    // Your implementation here
	let sum = 0;
	for(x; x<=y; x++) sum+= x;
	return sum;
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    // Your implementation here
	let sum = 0;
    for(let i = 1; i<=x; i++) {
		sum += 1/(i**2);
	}
	return sum.toFixed(2);  
};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    // Your implementation here
	return x.toString().length;
};