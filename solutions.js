// Verbal Questions
//
// What is the difference between a parameter and an argument?
// Parameter is the name of the values in the parentesis
// Argument is the actul value of the Parameter
//
// Within a function, what is the difference between return and console.log?
// Return returns the value of function
// console log prints whatever you tell it to print.


// Palindrome
const checkPalindrome = (str) => {
  let length = str.length;
  let start = str.substring(0, Math.floor(length / 2)).toLowerCase();
  let end = str.substring(length - Math.floor(length / 2)).toLowerCase();
  let reverseEnd = end.split('').reverse().join('');
  return (start === reverseEnd);
}


console.log(checkPalindrome('Radar'));
console.log(checkPalindrome("Borscht"));


// Sum Array
const sumArray = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
    console.log(sum)
}

// console.log(sumArray([1, 2, 3, 4, 5, 6])); I couldnt get this to work when calling the function, but I'm gettim the sum af the numbers in the array.

// Prime numbers
//Step One
let checkPrimes = (n) => {
 if(n === 2){
     return true;
 }
if(n < 2 || !(n % 2)){
  return false;
}
for (let i = 3; i <= n-1; i++) {
  if (n % i === 0) {
    return false
  }
}
return true
}
console.log(checkPrimes(19));

// Step two
let printPrime = (num) => {
  for(let i = 0; i <= num; i++) {
    if (checkPrimes(i)) {
      console.log(i)
    }
  }
}

printPrime(100);
