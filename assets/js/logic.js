const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const questionForm = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const questionChoices = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
const initials = document.querySelector('#initials');
const feedback = document.querySelector('#feedback');

// function to create a random index
function randomIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let index = arr[randomIndex];
  return index;
}

function startQuiz() {
  questionForm.classList.remove('hide');
  questionTitle.textContent = questions[0].question;
  let whatever = questions[0].answers[0];
  questionChoices.innerHTML = `<button>${whatever}</button>`;
}
// set up timer

startButton.addEventListener('click', startQuiz);

// question-title
// questionTitleText = questions[0].question;
// console.log(questionTitleText);
// textcontent

// choices
// questionChoicesText = questions[0].answers[2];

// const button = document.createElement('button');
// button.classList.add('isCorrect');
// button.innerHTML = `${questions[0].answers[2]}`;
// questionChoices.appendChild(button);

// innerhtml for loop button
// randomized

// if correct

// if not correct
// if not correct subtract from clock

// end of the game <div id="end-screen" class="hide"> switch on and questions switches off
// ----------------endScreen.classList.remove('hide');---------------

// <p>Your final score is <span id="final-score"></span>.</p>
// show final points

// submit initials

// submit initials to highscores

// feedback respond on correct or not correct

// delete highscores
