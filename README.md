# Midterm Problems

### Setup

This is an `npm install` and `npm test` setup.


### Challenges

* `fizzBuzzSingleNumber` - given a number, returns either that number or a string according to FizzBuzz rules, which are the following: 1) If the number is evenly divisible by both 5 and 3, return the string "FizzBuzz". 2) If the number is evenly divisible by 5 but not 3, return the string "Buzz". 3) If the number is evenly divisible by 3 but not 5, return the string "Fizz". 4) If the number isn't divisible by either, return the number unchanged.
* 
* `getMiddleLetters` - given a string, returns a string containing the middle characters (always plural). If there is an even number of characters, it returns the character before the midpoint and the character after. If there is an odd number of characters, it returns the character before the midpoint, the character at the midpoint, and the character after the midpoint. HINT: you can calculate the midpoint using `length`.
* 
* `getNextLetter` - given a single-letter string, it returns the next letter in the alphabet. When given "z", it wraps back around to "a". HINT: it'll save you time if you store the alphabet somewhere.
* 
* `getAverage` - given an array of numbers, it returns a number representing the mean average of those numbers. The mean average is calculated by the sum of a set of numbers divided by the number of numbers in the set. (See the tests for examples.) HINT: you can see how many items are in an array using its `length` property.
* 
* `triStateAreaOnly` - given an array of strings representing towns or cities, it returns an array of only those strings that end with the substrings "CT", "NY", or "NJ". HINT: this is a filter!
* 
* `removeTrolls` - given an array of strings representing user posts, returns an array where any post in the original that was exclusively in upper case has been removed. The ones that remain are those with at least one lowercase letter. HINT: this is a filter!
* 
* `cipher` - given a string, it returns a string where each letter in the original has been replaced by the following letter in the alphabet. HINT: this is a map! HINT 2: you can re-use earlier functions that we know (thanks to tests!) work.
* 
* `addToMultiDigitNumbers` - given a number representing an addend (a number added to another) and an array of numbers, it returns an array of numbers where each number in the original has been added to by the addend, except if any of the numbers in the set were single-digit numbers; those remain unchanged. The numbers will never be negative. See the tests for examples. HINT: this is a map! HINT 2: you can check if it's a single-digit number by converting it to a string, but you absolutely do not have to if string conversion Isn't Your Thing. There are other ways!
* 
* `hyphenateNames` - given an array of strings representing names, it returns the an array of strings where the last two surnames have been combined with a hyphen. HINT: this is a map! HINT 2: not all of the tested-for names have three words; one has four. 
