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


// Rock paper scissors

const choices = ["rock", "paper", "scissors"];

function randomMove(){
  let randomIndex = Math.floor(Math.random() * choices.length);
  let selection;
  if (randomIndex === 0){
    selection = "rock"
  } else if (randomIndex === 1) {
    selection = "paper"
  } else {
    selection = "scissors"
  }
  return selection;
// console.log(randomIndex)
// console.log(selection)
}
// console.log(randomMove());

let computerMove = randomMove();
console.log(computerMove);

let userMove = randomMove();
console.log(userMove);


function rockPaperScissors(computerMove, userMove){
  if(computerMove === userMove){
    console.log("It's a tie! The computer and user both chose " + userMove);
  }else if(computerMove === "rock"){
    if(userMove === "paper"){
      console.log("The user wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }else{
      console.log("The computer wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }
  }else if(computerMove === "paper"){
    if(userMove === "scissors"){
      console.log("The player wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }else{
      console.log("The computer wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }
  }else if(computerMove === "scissors"){
    if(userMove === "rock"){
      console.log("The player wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }else{
      console.log("The computer wins! The computer chose " + computerMove + " and the user chose " + userMove);
    }
  }
}

rockPaperScissors(computerMove, userMove);
