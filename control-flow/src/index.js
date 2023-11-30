/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    // Your implementation here
	return Math.min(number1, number2, number3);
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    // Your implementation here
	return (x%2) ? (((y%2)&&(z%2)) ? "odd" : "even/odd") : (((!(y%2))&&(!(z%2))) ? "even" : "even/odd");
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    // Your implementation here
	return ((z>=x)&&(z<=y)) ? "In range" : "Out of range";
    throw new Error('Task not implemented');
};
