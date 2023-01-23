const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const questionForm = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const questionChoices = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
const initials = document.querySelector('#initials');
const feedback = document.querySelector('#feedback');
let setTime = 60;
let selectedQuestions = [];
let correct = [];
let Incorrect = [];

// timer function
function timer() {
  let timeLeft = setInterval(function () {
    time.textContent = setTime;
    setTime--;
  }, 1000);
}

// create an array of random selected questions

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

function askQuestion(number) {
  if (questions[number] === undefined) {
    questionForm.classList.add('hide');
    endScreen.classList.remove('hide');
  } else {
    questionTitle.textContent = questions[number].question;
    quizAnswers = questions[number].answers;
    let buttons = '';
    for (let i = 0; i < quizAnswers.length; i++) {
      buttons += `<button class="btn">${questions[number].answers[i]}</button>`;
      questionChoices.innerHTML = buttons;
    }
    let btns = document.querySelectorAll('button');
    btns.forEach(function (i) {
      i.addEventListener('click', function () {
        if (i.innerHTML === questions[number].correctAnswer) {
          feedback.classList.remove('hide');
          feedback.textContent = 'Correct';
          askQuestion(number + 1);
        } else {
          feedback.classList.remove('hide');
          feedback.textContent = 'Wrong';
          setTime = setTime - 5;
          askQuestion(number + 1);
        }
      });
    });
  }
}

// start the Quiz
function startQuiz() {
  questionForm.classList.remove('hide');
  startButton.classList.add('hide');
  let currentQuestion = selectedQuestions[0];
  askQuestion(currentQuestion);
}

startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', timer);

// <p>Your final score is <span id="final-score"></span>.</p>
// show final points

// submit initials

// submit initials to highscores

// feedback respond on correct or not correct

// delete highscores
