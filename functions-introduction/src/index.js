/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    // Your implementation here
	let strArr = str.split("");
	let copyStart = strArr.length - symbolsCount;
	let partStr = "";
	if (strArr.length >= symbolsCount) {
		for (copyStart; copyStart < strArr.length; copyStart++) {
			partStr += strArr[copyStart];
		}
	}
	return partStr + str + partStr;
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    // Your implementation here
    let zX = Math.abs(z - x);
	let zY = Math.abs(z - y);
	if(zX < zY) {
		return x;
	}
	return y;
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    // Your implementation here
	return [...new Set(arr)];
};
