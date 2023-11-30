/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    // Your implementation here
	let result = number1 + number2;
	if(!isNaN(result)) {
		return parseFloat(result.toFixed(1));
	}
	throw new Error('Task not implemented');
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
    // Your implementation here
	return(`Hello, my name is ${name} ${surname} and I am ${age} years old.`);
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    // Your implementation here
	let sqrt = x**0.5;
	return(Number.isInteger(sqrt));
    throw new Error('Task not implemented');
};


