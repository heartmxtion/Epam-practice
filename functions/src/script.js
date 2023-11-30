function sumSequence(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / Math.pow(2, i);
  }
  return sum.toFixed(2);
}

function mergeArrays(...arrays) {
  return arrays.reduce((mergedArray, currentArray) => [...mergedArray, ...currentArray], []);
}

function isPalindrome(str) {
  const charCount = {};
  
  // Count the occurrences of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Count the number of characters that appear an odd number of times
  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  
  return true;
}


function countLetters(str) {
  if (!str || str.length === 0) {
    return {};
  }
  const count = {};
  for (let char of str) {
    if (char !== " ") {
      count[char] = count[char] ? count[char] + 1 : 1;
    }
  }
  return count;
}

function divideArrays(arr, size) {
  if (size <= 0) {
    return [];
  }
  if (arr.length <= size) {
    return arr;
  }
  const dividedArrays = [];
  let startIndex = 0;
  while (startIndex < arr.length) {
    dividedArrays.push(arr.slice(startIndex, startIndex + size));
    startIndex += size;
  }
  return dividedArrays;
}

function encrypt(str, n) {
  if (n <= 0) {
    return str;
  }
  let encryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const encryptedCharCode = ((charCode - 65 - n + 26) % 26) + 65;
    encryptedStr += String.fromCharCode(encryptedCharCode);
  }
  return encryptedStr;
}
