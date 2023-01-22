const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const questionForm = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const questionChoices = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
const initials = document.querySelector('#initials');
const feedback = document.querySelector('#feedback');

// create an array of random selected questions
let selectedQuestions = [];
function selectQuestions() {
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
    if (selectedQuestions.includes(randomIndex)) {
      selectedQuestions = selectedQuestions;
    } else {
      selectedQuestions.push(randomIndex);
    }
  } while (selectedQuestions.length < 5);

  return selectedQuestions;
}
selectQuestions();

// start the Quiz
function startQuiz() {
  questionForm.classList.remove('hide');
  questionTitle.textContent = questions[0].question;
  quizAnswers = questions[0].answers;
  let buttons = '';
  for (let i = 0; i < quizAnswers.length; i++) {
    buttons += `<button class="btn">${questions[0].answers[i]}</button>`;
    questionChoices.innerHTML = buttons;
  }
}
// set up timer

startButton.addEventListener('click', startQuiz);

// function checkQuiz() {
//   let btn = document.querySelectorAll('.btn');
//   if (btn.textContent = )
// }

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
