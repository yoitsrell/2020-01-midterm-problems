const {
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
} = require('./main.js')


describe('isEvenlyDivisible', () => {
  it('returns true if the first number is evenly divisible by the second', () => {
    expect(isEvenlyDivisible(6, 3)).toBe(true);
    expect(isEvenlyDivisible(1000, 10)).toBe(true);
    expect(isEvenlyDivisible(8, -4)).toBe(true);
    expect(isEvenlyDivisible(-8, -4)).toBe(true);
  })
  
  it(`returns false if the first number is not evenly divisible by the second`, () => {
    expect(isEvenlyDivisible(13, 3)).toBe(false);
    expect(isEvenlyDivisible(-8, -3)).toBe(false);
  })
})

describe('halfSquare', () => {
  it(`returns the half square of the given number`, () => {
    expect(halfSquare(6)).toBe(18);
    expect(halfSquare(7)).toBe(24.5);
    expect(halfSquare(-8)).toBe(32);
    expect(halfSquare(10)).toBe(50);
    expect(halfSquare(12)).toBe(72);
    expect(halfSquare(3)).toBe(4.5);
    expect(halfSquare(5)).toBe(12.5);
    expect(halfSquare(3.5)).toBe(6.125)
  })
});

describe('exclaim', () => {
  it(`given a string without exclamation marks at the end, returns the string with one appended.`, () => {
    expect(exclaim('hello')).toBe('hello!')
    expect(exclaim('yessir')).toBe('yessir!')
  })
  
  it(`given a string with an exclamation mark at the end, returns the string unchanged.`, () => {
    expect(exclaim('hello!')).toBe('hello!')
    expect(exclaim('yessir!')).toBe('yessir!')
  })
  
  it(`given a string with multiple exclamation marks at the end, returns the string with all but one removed from the end.`, () => {
    expect(exclaim('you friend!!')).toBe('you friend!');
    expect(exclaim('you fiend!!!!!!')).toBe('you fiend!');
  })
});

describe('isLong', () => {
  it(`returns true if the given string is longer than 15 characters`, () => {
    expect(isLong('the quick brown fox')).toBe(true);
  })

  it(`returns false if the given string is shorter than 15 characters`, () => {
    expect(isLong('the quick')).toBe(false);
  })

  it(`returns true if the given string is exactly 15 characters`, () => {
    expect(isLong('the quick brown')).toBe(true);
  })
});

describe('containsDigit', () => {
  it(`can determine that a string with only digits contains at least one digit`, () => {
    expect(containsDigit('1')).toBe(true);
    expect(containsDigit('31')).toBe(true);
    expect(containsDigit('315')).toBe(true);
    expect(containsDigit('1888')).toBe(true);
  })
  
  it(`can determine that a string with only non-numbers does not contain a digit`, () => {
    expect(containsDigit('ab')).toBe(false);
    expect(containsDigit('hello my weirdo')).toBe(false);
    expect(containsDigit('the quick brown fox begins a boring sentence')).toBe(false);
  })
  
  it(`can determine that a string that contains some numbers and some non-numbers does contain a digit`, () => {
    expect(containsDigit('ab3')).toBe(true);
    expect(containsDigit('35ab')).toBe(true);
    expect(containsDigit('35ab3')).toBe(true);
    expect(containsDigit('a3b')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain a digit`, () => {
    expect(containsDigit('')).toBe(false);
  })
});

describe('containsLowerCase', () => {
  it(`can determine that a string with only lowercase characters contains at least one lowercase character`, () => {
    expect(containsLowerCase('a')).toBe(true);
    expect(containsLowerCase('ab')).toBe(true);
    expect(containsLowerCase('dki')).toBe(true);
    expect(containsLowerCase('weiorusd')).toBe(true);
  })
  
  it(`can determine that a string with only uppercase letters does not contain any lowercase characters`, () => {
    expect(containsLowerCase('AB')).toBe(false);
    expect(containsLowerCase('HELLO')).toBe(false);
    expect(containsLowerCase('WORDSAMIRITE')).toBe(false);
  })

  it(`can determine that a string with only non-letters does not contain any lowercase characters`, () => {
    expect(containsLowerCase('    ')).toBe(false);
    expect(containsLowerCase('!!!')).toBe(false);
    expect(containsLowerCase('2382930')).toBe(false);
  })
  
  it(`can determine that a string that contains some lowercase letters and some uppercase does contain a lowercase letter`, () => {
    expect(containsLowerCase('abC')).toBe(true);
    expect(containsLowerCase('KDab')).toBe(true);
    expect(containsLowerCase('KWJabWI')).toBe(true);
    expect(containsLowerCase('aBc')).toBe(true);
  })
  
  it(`can determine that a string that contains some lowercase letters and some non-letters does contain a lowercase letter`, () => {
    expect(containsLowerCase('hello my good friends')).toBe(true);
    expect(containsLowerCase('I hate this @#(%')).toBe(true);
    expect(containsLowerCase('what even is this')).toBe(true);
    expect(containsLowerCase('what!')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain a lowercase letter`, () => {
    expect(containsLowerCase('')).toBe(false);
  })
});

describe('containsUpperCase', () => {
  it(`can determine that a string with only uppercase characters contains at least one uppercase character`, () => {
    expect(containsUpperCase('A')).toBe(true);
    expect(containsUpperCase('AB')).toBe(true);
    expect(containsUpperCase('DKI')).toBe(true);
    expect(containsUpperCase('WEIORUSD')).toBe(true);
  })
  
  it(`can determine that a string with only lowercase letters does not contain any uppercase characters`, () => {
    expect(containsUpperCase('ab')).toBe(false);
    expect(containsUpperCase('hello')).toBe(false);
    expect(containsUpperCase('wordsamirite')).toBe(false);
  })
  
  it(`can determine that a string with only non-letters does not contain any uppercase characters`, () => {
    expect(containsUpperCase('    ')).toBe(false);
    expect(containsUpperCase('!!!')).toBe(false);
    expect(containsUpperCase('2382930')).toBe(false);
  })
  
  it(`can determine that a string that contains some lowercase letters and some uppercase does contain an uppercase letter`, () => {
    expect(containsUpperCase('abC')).toBe(true);
    expect(containsUpperCase('KDab')).toBe(true);
    expect(containsUpperCase('KWJabWI')).toBe(true);
    expect(containsUpperCase('aBc')).toBe(true);
  })
  
  it(`can determine that a string that contains some uppercase letters and some non-letters does contain an uppercase letter`, () => {
    expect(containsUpperCase('hELLO MY GOOD FRIENDS')).toBe(true);
    expect(containsUpperCase('I HATE THIS @#(%')).toBe(true);
    expect(containsUpperCase('WHAT EVEN IS THIS')).toBe(true);
    expect(containsUpperCase('WHAT!')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain an uppercase letter`, () => {
    expect(containsUpperCase('')).toBe(false);
  })
});

describe('containsNonAlphanumeric', () => {
  it(`can determine that a string with only non-alphanumeric characters contains at least one non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric('#*(')).toBe(true);
    expect(containsNonAlphanumeric('   ')).toBe(true);
    expect(containsNonAlphanumeric('`??!`')).toBe(true);
  })
  
  it(`can determine that a string with only letters does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric('ab')).toBe(false);
    expect(containsNonAlphanumeric('hello')).toBe(false);
    expect(containsNonAlphanumeric('HELLOYOU')).toBe(false);
  })
  
  it(`can determine that a string with only non-zero digits does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric('3')).toBe(false);
    expect(containsNonAlphanumeric('33')).toBe(false);
    expect(containsNonAlphanumeric('238293')).toBe(false);
  })
  
  
  it(`can determine that a string with only zeros does not contain any non-alphanumeric characters`, () => {
    expect(containsNonAlphanumeric('0')).toBe(false);
    expect(containsNonAlphanumeric('00')).toBe(false);
    expect(containsNonAlphanumeric('0000')).toBe(false);
  })
  
  it(`can determine that a string that contains some alphanumeric characters and some non-alphanumeric characters does contain a non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric('hello there')).toBe(true);
    expect(containsNonAlphanumeric('p@ssw03d')).toBe(true);
    expect(containsNonAlphanumeric('3249sdlfjks!230')).toBe(true);
    expect(containsNonAlphanumeric(' hi3 ')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain a non-alphanumeric character`, () => {
    expect(containsNonAlphanumeric('')).toBe(false);
  })
});

describe('containsSpace', () => {
  it(`can determine that a string with only spaces contains at least one space`, () => {
    expect(containsSpace(' ')).toBe(true);
    expect(containsSpace('   ')).toBe(true);
    expect(containsSpace('        ')).toBe(true);
  })
  
  it(`can determine that a string with only letters does not contain any spaces`, () => {
    expect(containsSpace('ab')).toBe(false);
    expect(containsSpace('hello')).toBe(false);
    expect(containsSpace('HELLOYOU')).toBe(false);
  })
  
  it(`can determine that a string with only digits does not contain any non-alphanumeric characters`, () => {
    expect(containsSpace('3')).toBe(false);
    expect(containsSpace('33')).toBe(false);
    expect(containsSpace('2308293')).toBe(false);
  })
  
  it(`can determine that a string that contains some spaces and some non-spaces does contain a space`, () => {
    expect(containsSpace('hello there')).toBe(true);
    expect(containsSpace(' hi')).toBe(true);
    expect(containsSpace('hi ')).toBe(true);
    expect(containsSpace(' hi3 ')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain any spaces`, () => {
    expect(containsSpace('')).toBe(false);
  })
});

describe('countWords', () => {
  it(`returns the count of words in a string with spaces between words`, () => {
    expect(countWords('hey you')).toBe(2);
    expect(countWords('hello there sir')).toBe(3);
    expect(countWords('greetings my good sir')).toBe(4);
  })
  
  it(`returns the count of words when there is only one`, () => {
    expect(countWords('hello')).toBe(1);
  })
});

describe('digits', () => {
  it(`can turn a positive number into an array of its digits`, () => {
    expect(digits(0)).toEqual([0]);
    expect(digits(1)).toEqual([1]);
    expect(digits(12)).toEqual([1, 2]);
    expect(digits(12350)).toEqual([1, 2, 3, 5, 0]);
  })
  
  it(`can turn a negative number into an array of its digits, ignoring the negative sign`, () => {
    expect(digits(-0)).toEqual([0]);
    expect(digits(-1)).toEqual([1]);
    expect(digits(-12)).toEqual([1, 2]);
    expect(digits(-12350)).toEqual([1, 2, 3, 5, 0]);
  })
  
  it(`can turn a floating point number into an array of its digits, ignoring the decimal point`, () => {
    expect(digits(3.1519)).toEqual([3, 1, 5, 1, 9]);
    expect(digits(4.04)).toEqual([4, 0, 4]);
  })
});

describe('truncate', () => {
  it(`shortens a title of at least 15 characters to one with 8 and 3 dots.`, () => {
    expect(truncate(`I'm so tired, my mind is set on you`)).toBe(`I'm so t...`)
  })

  it(`shortens a string of exactly 15 characters`, () => {
    expect(truncate(`15 characters!!`)).toBe('15 chara...');
  })

  it(`does not shorten a sub-15-character string`, () => {
    expect(truncate(`tiny str`)).toBe('tiny str');
  })
});

describe('isValidPassword', () => {
  it(`returns false if there are no uppercase characters in the given string`, () => {
    expect(isValidPassword('jelly22fi$h')).toBe(false);
  })

  it(`returns false if there are no lowercase characters in the given string`, () => {
    expect(isValidPassword('JELLY22FI$H')).toBe(false);
  })

  it(`returns false if there are no digits in the given string`, () => {
    expect(isValidPassword('Usher!')).toBe(false);
  })

  it(`returns false if there are no non-alphanumeric characters in the given string`, () => {
    expect(isValidPassword('Passw0rd')).toBe(false);
  })

  it(`returns false if there are any spaces in the given string`, () => {
    expect(isValidPassword('Passw0rd #(@$')).toBe(false);
  })

  it(`returns true if it contains a lowercase letter, an uppercase letter, a digit, a non-alphanumeric character, and no spaces`, () => {
    expect(isValidPassword('Lov3MyP!ano')).toBe(true);
    expect(isValidPassword('1Ki77$')).toBe(true);
    expect(isValidPassword('a11Black$')).toBe(true);
    expect(isValidPassword('BankLogin!3')).toBe(true);
  })
});

describe('onlyPunchy', () => {
  it(`returns only those titles that are shorter than 15 characters`, () => {
    expect(onlyPunchy(['quarantine!', 'the lord of the rings', 'the matrix!'])).toEqual(['quarantine!', 'the matrix!'])
  })

  it(`adds an exclamation point to any titles without exclamation points`, () => {
    expect(onlyPunchy(['quarantine', 'the matrix'])).toEqual(['quarantine!', 'the matrix!'])
  })

  it(`removes any excess exclamation points from any titles with multiple exclamation points`, () => {
    expect(onlyPunchy(['quarantine!!', 'the matrix!!!'])).toEqual(['quarantine!', 'the matrix!'])
  })

  it(`does not factor in excess exclamation points when deciding if title is shorter than 15 characters`, () => {
    expect(onlyPunchy(['quarantine!!!!!!!!!!!', 'the matrix!!!!!!!!!!!!!!!!!!!'])).toEqual(['quarantine!', 'the matrix!'])
  })
});