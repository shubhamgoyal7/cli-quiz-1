var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");

console.log(`Welcome ${userName} to Do YOU KNOW SHUBHAM.`);

var score=0;

function play(question,answer){
  userAnswer=readlineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()) {
  console.log("Right!");
  score = score + 1;
} else {
  console.log("Wrong!");
}

console.log(`current score: ${score}`);
console.log("-------");
}

var questions = [{
  question: "where do I live?",
  answer: "Delhi",
}, {
  question: "my fav tv show?",
  answer: "suits",
}, {
  question: "what is my age?",
  answer: "22",
}];

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log(`YAY! You Scored: ${score}`);