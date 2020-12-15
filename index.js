const readlineSync = require('readline-sync');

var score = 0, playAgain = 'y';
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ' Welcome to DO YOU KNOW JS?');
console.log("If you wish to exit while playing press ctrl+c")

