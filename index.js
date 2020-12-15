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