// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
  return a + b;
}

function myOwnMultiplyFunction(a, b) {
  return a * b;
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function belowZeroFunction(a) {
  if (a < 0) {
    return true;
  } else {
    return false;
  }
}

function roundedNumberFunction(a) {
  return Math.round(a);
}

function numbersAddedFunction(a) {
  b = 0;
  for (let i = 1; i <= a; i++) {
    b += i;
  }
  return b;
}

function minMaxFunction(findMinMax) {
  let max = findMinMax[0],
    min = findMinMax[0];
  for (let i = 0; i < findMinMax.length; i++) {
    if (findMinMax[i] > max) {
      max = findMinMax[i];
    }

    if (findMinMax[i] < min) {
      min = findMinMax[i];
    }
  }

  return { min, max };
}

function dateAfterFunction(afterXmasEve2020) {
  var dateInput = new Date(afterXmasEve2020);
  var date = new Date("2020-12-24");

  if (dateInput >= date) {
    return true;
  } else if (dateInput < date) {
    return false;
  }
}

function sortedFunction(result) {
  const sortedArray = result.sort((a, b) => a.length - b.length);

  return sortedArray;
}

function charCountFunction(string1, string2) {
  let count = 0;
  for (var i = 0; i < string2.length; i++) {
    if (string2.toLowerCase().charAt(i) == string1) {
      count += 1;
    }
  }
  return count;
}

function numbersOnlyFunction(result) {
  const onlyNumbers = result.filter((element) => typeof element === "number");
  return onlyNumbers.filter((item) => !isNaN(item));
}

function numbersSortedFunction(item1, item2) {
  if (item2 == 1) {
    return item1.sort((a, b) => a - b);
  }

  if (item2 == -1) {
    return item1.sort((a, b) => b - a);
  }
}

function personClassFunction(firstname, lastname, initials) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.initials = initials;

  firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
  initials =
    firstname.charAt(0).toUpperCase() + "." + lastname.charAt(0).toUpperCase();

  return { firstname, lastname, initials };
}

function doublePriceFunction(expected) {
  const expectedArray = expected;
  expected[0].price = expected[0].price * 2;
  expected[1].price = expected[1].price * 2;

  return expectedArray;
}

function trueFalseFunction(a, b) {
  if ((a, b) === (true, false)) {
    (a, b) === false;
    return a, b;
  }

  if ((a, a) === (true, true)) {
    (a, a) === true;
    return a, a;
  }
}

function removeLeadingTrailingFunction(removeLeadingTrailing) {
  var leadingTrailingResult = parseFloat(removeLeadingTrailing);
  return leadingTrailingResult;
}

function getKeysAndValuesFunction(getKeysAndValues) {
  let keys = Object.keys(getKeysAndValues);
  let values = Object.values(getKeysAndValues);
  return { keys, values };
}
// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!

//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum;
module.exports.multiply = myOwnMultiplyFunction;
module.exports.isBelowZero = belowZeroFunction;
module.exports.round = roundedNumberFunction;
module.exports.addingUp = numbersAddedFunction;
module.exports.findMinMax = minMaxFunction;
module.exports.afterXmasEve2020 = dateAfterFunction;
module.exports.sortByStringLength = sortedFunction;
module.exports.charCounter = charCountFunction;
module.exports.numbersOnly = numbersOnlyFunction;
module.exports.sortNumbers = numbersSortedFunction;
module.exports.personFactory = personClassFunction;
module.exports.doublePrice = doublePriceFunction;
module.exports.and = trueFalseFunction;
module.exports.removeLeadingTrailing = removeLeadingTrailingFunction;
module.exports.getKeysAndValues = getKeysAndValuesFunction;
