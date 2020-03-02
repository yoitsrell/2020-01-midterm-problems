function fizzBuzzSingleNumber(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 == 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}

function letterOffsetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rotated = '';

  for (const character of str) {
    let newIndex = alphabet.indexOf(character) + 1;
    if (newIndex > 25) {
      newIndex = 0;
    }

    rotated += alphabet[newIndex]
  }
  
  // Alternate, simpler version (note the extra "a" in alphabet!):
  // const alphabet = 'abcdefghijklmnopqrstuvwxyza';
  // let rotated = '';

  // for (const character of str) {
  //   rotated += alphabet[alphabet.indexOf(character) + 1];
  // }

  // Either way:
  return rotated;
}

function uppercaseCount(words) {
  // Array.reduce version:
  return words.reduce((count, word) => {
    return word.toUpperCase() !== word
      ? count
      : count + 1
  }, 0)


  // Array.filter.length version:

  // return words.filter((word) => word.toUpperCase() === word).length;


  // Manual version:
  // let count = 0;

  // for (const word of words) {
  //   if (word.toUpperCase() === word) {
  //     count++;
  //   }
  // }

  // return count;
}

function addToMultiDigitNumbers(addend, numbers) {
  // Using Array.map:
  return numbers.map((number) => {
    const numberified = Number(number);

    if (numberified < 10) {
      return number;
    }

    return (numberified + addend).toString()
  })

  // Manual mapping version:
  // const newNums = [];

  // for (const number of numbers) {
  //   const numberified = Number(number);

  //   if (numberified < 10) {
  //     newNums.push(number);
  //   } else {
  //     newNums.push((Number(number) + addend).toString());
  //   }
  // }

  // return newNums;
}


function singlesOnly(people) {
  // Using Array.filter:
  return people.filter((person) => person.status !== 'married')

  // Manual filter:
  // const singles = [];

  // for (const person of people) {
  //   if (person.status !== 'married') {
  //     singles.push(person);
  //   }
  // }

  // return singles;
}

function getMeanAverageSalaryOfWomen(people) {
  // Filter and reduce version:
  const women = people.filter((person) => person.gender === 'female')

  return women.reduce((sum, person) => sum + person.salary, 0) / women.length;


  // Manual version:
  // let sum = 0;
  // let count = 0;
  
  // for (const person of people) {
  //   if (person.gender === 'female') {
  //     count++;
  //     sum += person.salary;
  //   }
  // }

  // return sum / count;
}


module.exports = {
  fizzBuzzSingleNumber,
  letterOffsetter,
  uppercaseCount,
  addToMultiDigitNumbers,
  singlesOnly,
  getMeanAverageSalaryOfWomen,
}