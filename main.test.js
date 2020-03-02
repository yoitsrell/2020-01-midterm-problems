const {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
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

describe('getMiddleLetter', () => {
  it(`returns the middle two letters from a string with an even number of letters`, () => {
    expect(getMiddleLetters('yeah')).toBe('ea');
    expect(getMiddleLetters('yellow')).toBe('ll');
    expect(getMiddleLetters('hello, you')).toBe('o,');
  })

  it(`returns the middle three letters from a stirng with an odd number of letters`, () => {
    expect(getMiddleLetters('fantastic')).toBe('tas');
  })
})

describe('getNextLetter', () => {
  it('given a letter, returns the next letter in the alphabet', () => {
    expect(getNextLetter('a')).toBe('b');
    expect(getNextLetter('b')).toBe('c');
    expect(getNextLetter('h')).toBe('i');
  })

  it(`wraps back around if given z`, () => {
    expect(getNextLetter('z')).toBe('a');
  })
})

describe('cipher', () => {
  it(`returns a string based on the given string where every letter has been replaced by the following letter in the alphabet`, () => {
    expect(cipher('hello')).toBe('ifmmp');
    expect(cipher('hi')).toBe('ij');
    expect(cipher('colin')).toBe('dpmjo');
  })

  it(`can wrap once around the alphabet`, () => {
    expect(cipher('zzz')).toBe('aaa');
    expect(cipher('zebra')).toBe('afcsb');
    expect(cipher('frazzled')).toBe('gsbaamfe');
  })
});

describe('addToMultiDigitNumbers', () => {
  it(`adds the first parameter number to the each number in the second parameter, an array of multi-digit numbers`, () => {
    const numbers1 = [
      50,
      500,
      32,
    ]

    const result1 = [
      53,
      503,
      35,
    ]

    const numbers2 = [
      1091,
      10000,
      12
    ] 

    const result2 = [
      1097,
      10006,
      18,
    ]

    expect(addToMultiDigitNumbers(3, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(6, numbers2)).toEqual(result2);
  })

  it(`handles carrying over digits`, () => {
    const numbers1 = [
      50,
      500,
      32,
    ]

    const result1 = [
      63,
      513,
      45,
    ]

    const numbers2 = [
      1091,
      10000,
      12
    ]

    const result2 = [
      1211,
      10120,
      132
    ]

    expect(addToMultiDigitNumbers(13, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(120, numbers2)).toEqual(result2);
  })

  it(`does not add to single-digit numbers`, () => {
    const numbers1 = [
      50,
      5,
      0,
    ]

    const result1 = [
      51,
      5,
      0,
    ]

    const numbers2 = [
      3,
      303,
      8,
      1000
    ]

    const result2 = [
      3,
      308,
      8,
      1005
    ]

    expect(addToMultiDigitNumbers(1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(5, numbers2)).toEqual(result2);
  })

  it(`can handle negative addends`, () => {
    const numbers1 = [
      48,
      53,
      12,
    ]

    const result1 = [
      47,
      52,
      11,
    ]

    const numbers2 = [
      58,
      309,
      87,
      1006
    ]

    const result2 = [
      52,
      303,
      81,
      1000
    ]

    expect(addToMultiDigitNumbers(-1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(-6, numbers2)).toEqual(result2);
  })
});

describe('getAverage', () => {
  it(`gets the average of the given array of numbers`, () => {
    const numbers1 = [
      3,
      5,
      10,
    ]

    const numbers2 = [
      25,
      85,
      40,
      50,
    ]

    expect(getAverage(numbers1)).toBe(6);
    expect(getAverage(numbers2)).toBe(50);
  })
})

describe('triStateAreaOnly', () => {
  it(`given an array of strings, returns an array of only those strings that end in "NY" or "NJ" or "CT"`, () => {
    const cities1 = [
      'Brooklyn, NY',
      'Stamford, CT',
      'Boston, MA',
      'Buffalo, NY',
      'Los Angeles, CA',
    ];

    const triState1 = [
      'Brooklyn, NY',
      'Stamford, CT',
      'Buffalo, NY',
    ];

    const cities2 = [
      'Reno, NV',
      'Cranford, NJ',
      'Dover, VT',
    ];

    const triState2 = [
      'Cranford, NJ',
    ];

    expect(triStateAreaOnly(cities1)).toEqual(triState1);
    expect(triStateAreaOnly(cities2)).toEqual(triState2);
  })
})

describe('removeTrolls', () => {
  it(`given an array of strings representing user posts, it returns an array of those posts that have at least one lower case letter`, () => {
    const posts1 = [
      'I AM ANGRY ABOUT POLITICS!!',
      `I'm kind of annoyed.`,
      `You know what sucks?
      EVERYTHING.`,
      `wat`,
      `RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGE`,
    ];

    const acceptablePosts1 = [
      `I'm kind of annoyed.`,
      `You know what sucks?
      EVERYTHING.`,
      `wat`,
    ];

    const posts2 = [
      'a/s/l',
      `FIRST`,
      `BY THOR'S HAMMER!!`,
    ];

    const acceptablePosts2 = [
      'a/s/l',
    ];

    expect(removeTrolls(posts1)).toEqual(acceptablePosts1);
    expect(removeTrolls(posts2)).toEqual(acceptablePosts2);
  })
})

describe('hyphenateNames', () => {
  it(`hyphenates the last two names in each string in the given array`, () => {
    const unhyphenated1 = [
      'Sean Reid Foley',
      'Henri de Toulouse Lautrec',
      'Catherine Zeta Jones',
    ];

    const hyphenated1 = [
      'Sean Reid-Foley',
      'Henri de Toulouse-Lautrec',
      'Catherine Zeta-Jones',
    ];

    const unhyphenated2 = [
      'Olivia Newton John',
      'Camille Saint Saens',
      'Ban Ki Moon',
    ];

    const hyphenated2 = [
      'Olivia Newton-John',
      'Camille Saint-Saens',
      'Ban Ki-Moon',
    ];

    expect(hyphenateNames(unhyphenated1)).toEqual(hyphenated1);
    expect(hyphenateNames(unhyphenated2)).toEqual(hyphenated2);
  })
})
