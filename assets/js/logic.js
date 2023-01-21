// variables
const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const questions = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const questionChoices = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
const initials = document.querySelector('#initials');
const feedback = document.querySelector('#feedback');
console.log(feedback);

// function to create a random index
function randomIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let index = arr[randomIndex];
  return index;
}

// set up timer

// when start pressed <div id="questions" class="hide"> switch on
// -----------------questions.classList.remove('hide');---------------

// question-title
// questionTitleText = questions[0].question;
// console.log(questionTitleText);
// innercontent
// choices
// questionChoicesText = questions[0].answers[2];
// console.log(questionChoicesText);
// innerhtml for loop button
// randomized

// if correct

// if not correct
// if not correct subtract from clock

// end of the game <div id="end-screen" class="hide"> switch on
// ----------------endScreen.classList.remove('hide');---------------

// <p>Your final score is <span id="final-score"></span>.</p>
// show final points

// submit initials

// submit initials to highscores

// feedback respond on correct or not correct

// delete highscores
