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
