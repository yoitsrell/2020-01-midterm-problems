const {
  fizzBuzzSingleNumber,
  letterOffsetter,
  addToMultiDigitNumbers,
  singlesOnly,
  uppercaseCount,
  getMeanAverageSalaryOfWomen,
} = require('./main.js')


describe('fizzBuzzSingleNumber', () => {
  it(`returns the given number unchanged if it's not divisible by 3 or 5.`, () => {
    expect(fizzBuzzSingleNumber(1)).toBe(1)
    expect(fizzBuzzSingleNumber(2)).toBe(2)
    expect(fizzBuzzSingleNumber(4)).toBe(4)
    expect(fizzBuzzSingleNumber(7)).toBe(7)
  })

  it(`returns the string 'Fizz' if the given number is divisible by 3 but not by 5.`, () => {
    expect(fizzBuzzSingleNumber(3)).toBe('Fizz')
    expect(fizzBuzzSingleNumber(6)).toBe('Fizz')
    expect(fizzBuzzSingleNumber(9)).toBe('Fizz')
    expect(fizzBuzzSingleNumber(21)).toBe('Fizz')
    expect(fizzBuzzSingleNumber(303)).toBe('Fizz')
  })

  it(`returns the string 'Buzz' if the given number is divisible by 5 but not by 3.`, () => {
    expect(fizzBuzzSingleNumber(5)).toBe('Buzz')
    expect(fizzBuzzSingleNumber(10)).toBe('Buzz')
    expect(fizzBuzzSingleNumber(20)).toBe('Buzz')
    expect(fizzBuzzSingleNumber(50)).toBe('Buzz')
    expect(fizzBuzzSingleNumber(700)).toBe('Buzz')
  })

  it(`returns the string 'FizzBuzz' if the given number is divisible by both 3 and 5.`, () => {
    expect(fizzBuzzSingleNumber(15)).toBe('FizzBuzz')
    expect(fizzBuzzSingleNumber(30)).toBe('FizzBuzz')
    expect(fizzBuzzSingleNumber(300)).toBe('FizzBuzz')
  })
})

describe('letterOffsetter', () => {
  it(`returns a string based on the given string where every letter has been replaced by the following letter in the alphabet`, () => {
    expect(letterOffsetter('hello')).toBe('ifmmp');
    expect(letterOffsetter('hi')).toBe('ij');
    expect(letterOffsetter('colin')).toBe('dpmjo');
  })

  it(`can wrap once around the alphabet`, () => {
    expect(letterOffsetter('zzz')).toBe('aaa');
    expect(letterOffsetter('zebra')).toBe('afcsb');
    expect(letterOffsetter('frazzled')).toBe('gsbaamfe');
  })
});

describe('uppercaseCount', () => {
  it(`returns a count of words in the array that are entirely uppercased`, () => {
    const words1 = [
      'lorem',
      'IPSUM',
      'dolor',
      'SIT',
      'AMET',
      'CONSECTETUR',
      'adipiscing',
      'elit',
    ]

    const words2 = [
      'LOREM',
      'IPSUM',
      'dolor',
      'SIT',
      'amet',
      'CONSECTETUR',
      'adipiscing',
      'ELIT',
    ]

    expect(uppercaseCount(words1)).toBe(4)
    expect(uppercaseCount(words2)).toBe(5)
  })

  it(`does not count mixed case words`, () => {
    const words1 = [
      'Lorem',
      'IPSUM',
      'dOlor',
      'SIT',
      'AMeT',
      'CONSECTETUR',
      'adipiscing',
      'elit',
    ]

    const words2 = [
      'LOREM',
      'IpSUM',
      'dolor',
      'SIT',
      'amet',
      'CONsECTETUR',
      'ADIPISCING',
      'ELIT',
    ]
    expect(uppercaseCount(words1)).toBe(3)
    expect(uppercaseCount(words2)).toBe(4)
  })
});

describe('addToMultiDigitNumbers', () => {
  it(`adds the first parameter number to the each number in the second parameter, an array of multi-digit numbers in string format`, () => {
    const numbers1 = [
      '50',
      '500',
      '32',
    ]

    const result1 = [
      '53',
      '503',
      '35',
    ]

    const numbers2 = [
      '1091',
      '10000',
      '12'
    ]

    const result2 = [
      '1097',
      '10006',
      '18'
    ]

    expect(addToMultiDigitNumbers(3, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(6, numbers2)).toEqual(result2);
  })

  it(`handles carrying over digits`, () => {
    const numbers1 = [
      '50',
      '500',
      '32',
    ]

    const result1 = [
      '63',
      '513',
      '45',
    ]

    const numbers2 = [
      '1091',
      '10000',
      '12'
    ]

    const result2 = [
      '1211',
      '10120',
      '132'
    ]

    expect(addToMultiDigitNumbers(13, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(120, numbers2)).toEqual(result2);
  })

  it(`does not add to single-digit numbers`, () => {
    const numbers1 = [
      '50',
      '5',
      '0',
    ]

    const result1 = [
      '51',
      '5',
      '0',
    ]

    const numbers2 = [
      '3',
      '303',
      '8',
      '1000'
    ]

    const result2 = [
      '3',
      '308',
      '8',
      '1005'
    ]

    expect(addToMultiDigitNumbers(1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(5, numbers2)).toEqual(result2);
  })

  it(`can handle negative addends`, () => {
    const numbers1 = [
      '48',
      '53',
      '12',
    ]

    const result1 = [
      '47',
      '52',
      '11',
    ]

    const numbers2 = [
      '58',
      '309',
      '87',
      '1006'
    ]

    const result2 = [
      '52',
      '303',
      '81',
      '1000'
    ]

    expect(addToMultiDigitNumbers(-1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(-6, numbers2)).toEqual(result2);
  })
});

describe('singlesOnly', () => {
  it(`returns only the given people whose marital status is not married`, () => {
    const people = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    const singles = [
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
    ]

    expect(singlesOnly(people)).toEqual(singles);
  })

  it(`considers divorcees to be single`, () => {
    const people = [
      {
        name: 'Ian',
        status: 'divorced',
      },
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
      {
        name: 'Colleen',
        status: 'divorced',
      }
    ]

    const singles = [
      {
        name: 'Ian',
        status: 'divorced',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Colleen',
        status: 'divorced',
      },
    ]

    expect(singlesOnly(people)).toEqual(singles)
  })

  it(`does not modify the original list`, () => {
    const originalPeople = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    const people = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    const singles = [
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
    ]

    singlesOnly(people);
    expect(people).toEqual(originalPeople);
  })
});

describe('getMeanAverageSalaryOfWomen', () => {
  it(`returns the mean average of the salaries of the given people when all people are women`, () => {
    const people1 = [
      {
        name: 'Colleen',
        gender: 'female',
        salary: 70,
      },
      {
        name: 'Alice',
        gender: 'female',
        salary: 58,
      },
      {
        name: 'Hannah',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Edwina',
        gender: 'female',
        salary: 70,
      },
    ]

    const people2 = [
      {
        name: 'Elizabeth',
        gender: 'female',
        salary: 83,
      },
      {
        name: 'Robin',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Helen',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Sophia',
        gender: 'female',
        salary: 70,
      },
    ]

    expect(getMeanAverageSalaryOfWomen(people1)).toBe(66.5)
    expect(getMeanAverageSalaryOfWomen(people2)).toBe(72.25)
  })

  it(`returns the mean average of the salaries of only the women when not all people are women`, () => {
    const people1 = [
      {
        name: 'Colin',
        gender: 'male',
        salary: 70,
      },
      {
        name: 'Alice',
        gender: 'female',
        salary: 58,
      },
      {
        name: 'Hannah',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Ed',
        gender: 'male',
        salary: 70,
      },
    ]

    const people2 = [
      {
        name: 'Jonathan',
        gender: 'male',
        salary: 83,
      },
      {
        name: 'Robin',
        gender: 'male',
        salary: 68,
      },
      {
        name: 'Helen',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Sophia',
        gender: 'female',
        salary: 70,
      },
    ]

    expect(getMeanAverageSalaryOfWomen(people1)).toBe(63)
    expect(getMeanAverageSalaryOfWomen(people2)).toBe(69)
  })
});