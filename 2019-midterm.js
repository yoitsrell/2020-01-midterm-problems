function isEvenlyDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function halfSquare(number) {
  return number ** 2 / 2;
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  let exclaimed = str.slice() + '!';

  while(exclaimed[exclaimed.length - 2] === '!') {
    exclaimed = exclaimed.slice(0, -1);
  }

  return exclaimed;
}

function countWords(str) {
  return str.split(' ').length;
}

function containsDigit(str) {
  const digits = '1234567890';
  
  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true;
    }
  }

  return false;
}

function containsLowerCase(str) {
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      return true;
    }
  }
  
  return false;
}

function containsUpperCase(str) {
  const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      return true;
    }
  }
  
  return false;
}

function containsNonAlphanumeric(str) {
  const alphanumeric = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
  
  for (let i = 0; i < str.length; i++) {
    if (!alphanumeric.includes(str[i])) {
      return true;
    }
  }
  
  return false;
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      return true;
    }
  }
  
  return false;
}

function digits(num) {
  const stringifiedDigits = num.toString();
  const numbers = [];
  
  for (let i = 0; i < stringifiedDigits.length; i++) {
    if (stringifiedDigits[i] !== '-' && stringifiedDigits[i] !== '.') {
      numbers.push(Number(stringifiedDigits[i]))
    }
  }
  
  return numbers;
}

function truncate(str) {
  return isLong(str) ? `${str.slice(0, 8)}...` : str;
}

function isValidPassword(str) {
  return containsUpperCase(str)
  && containsLowerCase(str)
  && containsDigit(str)
  && containsNonAlphanumeric(str)
  && !containsSpace(str);
}

function onlyPunchy(titles) {
  const punchyTitles = [];
  
  for (let i = 0; i < titles.length; i++) {
    const exclaimed = exclaim(titles[i]);
    if (!isLong(exclaimed)) {
      punchyTitles.push(exclaimed);
    }
  }
  
  return punchyTitles;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
