/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(num){

if((num % 3 === 0) && (num % 5 === 0))
{
  return ("FizzBuzz")
}else if((num % 5 === 0) && (num % 3 !== 0)) 
{
  return('Buzz')
}else if((num % 3 !== 0) && (num % 5 === 0))
{
  return('Fizz')
}else{
  return(num)
}
}


function getMiddleLetters(str){
let even = ''
let odd = ''

  if(str.length % 2 === 0){ 
    return even
} else if(str.length % 2 === 1){
  return odd
}
return getMiddleLetters
}


function getNextLetter(str){
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'   

  for (const item of str){
    alpha += item 
  }
  return 
}

function getAverage(array){
let result = 0 
  
for (const item of array){
  result += item 
}
  return result/ array.length
}

function triStateAreaOnly(){
}

function removeTrolls(){

}

function cipher(str){
  result = ""

}


function addToMultiDigitNumbers(){

}

function hyphenateNames(){

}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
