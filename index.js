const readlineSync = require('readline-sync');

var score = 0, playAgain = 'y';
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ' Welcome to DO YOU KNOW JS?');
console.log("If you wish to exit while playing press ctrl+c")

function play(question, answer) {
  var userAnswer = readlineSync.question(question, answer);
  
  if (userAnswer === answer) {
    console.log("Correct answer!");
    console.log(score+=1);
  } else {
      console.log("Oops! Wrong answer");
      if (score > 0) {
        console.log(score-=1);
      }
  }

  console.log("--------------------------");
}

const questions = [{
  question: "What do we use to print a value to the console? ",
  answer: "console.log()"
}, {
  question: "Which built-in method combines the text of two strings and returns a new string? ",
  answer: "concat()"
}, {
  question: "Which function of Number object returns the number's value? ",
  answer: "valueOf()"
}, {
  question: "Which function of String object splits a String object into an array of strings by separating the string into substrings? ",
  answer: "split()"
}, {
  question: "Which function of String object returns the calling string value converted to upper case? ",
  answer: "toUpperCase()"
}, {
  question: "Which function of Array object removes the last element from an array and returns that element? ",
  answer: "pop()"
}, {
  question: "Which function of Array object adds one or more elements to the front of an array and returns the new length of the array? ",
  answer: "unshift()"
}]

while(playAgain.toLowerCase() === 'y') {
  playAgain = 'n';
  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }

  console.log("Final score is ", score);
  playAgain = readlineSync.question('Do you wanna play again (y/n)? ');

}