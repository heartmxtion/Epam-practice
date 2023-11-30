function addNumber(arr, number) {
  if (number < 0) {
    arr.push(number);
  } else if (number > 0) {
    arr.unshift(number);
  }
  return arr;
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || (Number.isNaN(arr1[i]) && !Number.isNaN(arr2[i])) || (!Number.isNaN(arr1[i]) && Number.isNaN(arr2[i]))) {
      return false;
    }
  }

  return true;
}


function getNumberOfEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function getSubarray(arr, data) {
  const index = arr.indexOf(data);
  if (index === -1) {
    return [];
  }
  return arr.slice(0, index + 1);
}

function getDuplicateValues(arr) {
  const duplicates = [];
  const uniqueValues = new Set();
  const duplicatesSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (uniqueValues.has(currentValue)) {
      duplicatesSet.add(currentValue);
    } else {
      uniqueValues.add(currentValue);
    }
  }

  duplicatesSet.forEach((value) => {
    duplicates.push(value);
  });

  return duplicates;
}

function getMaxNumbers(arr) {
  const maxNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    if (subArray.length > 0) {
      const maxNumber = Math.max(...subArray);
      maxNumbers.push(maxNumber);
    }
  }
  return maxNumbers;
}
