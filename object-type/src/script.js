function createUser(firstName, lastName) {
  return {
    firstName,
    lastName
  };
}

function getFullName(user) {
  if (user) {
    return `${user.firstName} ${user.lastName}`.trim();
  } else {
    return '';
  }
}

function getWidth(params) {
  if (params && params.styling && params.styling.sizes && params.styling.sizes.width) {
    return params.styling.sizes.width;
  } else {
    return null;
  }
}

function extendObject(obj, isValid) {
  const clonedObject = { ...obj };
  clonedObject.isValid = isValid;
  return clonedObject;
}

function sumPrices(prices) {
  let sum = 0;
  for (let key in prices) {
    const value = prices[key];
    if (typeof value === 'number' && isFinite(value)) {
      sum += value;
    }
  }
  return sum;
}

function createUserWithFullName(firstName, lastName) {
  const user = createUser(firstName, lastName);

  user.setFirstName = function(newFirstName) {
    this.firstName = newFirstName;
  };

  user.setLastName = function(newLastName) {
    this.lastName = newLastName;
  };

  user.getFullName = function() {
    return getFullName(this);
  };

  return user;
}
