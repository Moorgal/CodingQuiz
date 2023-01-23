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

// timer function
function timer() {
  let timeLeft = setInterval(function () {
    time.textContent = setTime;
    setTime--;
  }, 1000);
}

// create an array of random selected questions
function selectQuestions() {
  while (selectedQuestions.length < 5) {
    randomIndex = Math.floor(Math.random() * questions.length);
    if (selectedQuestions.includes(randomIndex)) {
      selectedQuestions = selectedQuestions;
    } else {
      selectedQuestions.push(randomIndex);
    }
  }
  return selectedQuestions;
}

counter = 0;

function startQuiz() {
  selectedQuestions = selectQuestions();

  if (counter < 5) {
    questionForm.classList.remove('hide');
    startButton.classList.add('hide');
    questionTitle.textContent = questions[selectedQuestions[counter]].question;
    quizAnswers = questions[selectedQuestions[counter]].answers;
    let buttons = '';
    for (let i = 0; i < quizAnswers.length; i++) {
      buttons += `<button class="btn">${questions[selectedQuestions[counter]].answers[i]}</button>`;
      questionChoices.innerHTML = buttons;
    }
    let btns = document.querySelectorAll('button');
    btns.forEach(function (i) {
      i.addEventListener('click', function () {
        if (i.innerHTML === questions[selectedQuestions[counter]].correctAnswer) {
          feedback.classList.remove('hide');
          feedback.textContent = 'Correct';
          counter++;
          startQuiz();
        } else {
          feedback.classList.remove('hide');
          feedback.textContent = 'Wrong';
          setTime = setTime - 5;
          counter++;
          startQuiz();
        }
      });
    });
  } else {
    questionForm.classList.add('hide');
    endScreen.classList.remove('hide');
  }
}

startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', timer);

// <p>Your final score is <span id="final-score"></span>.</p>
// show final points

// submit initials

// submit initials to highscores

// feedback respond on correct or not correct

// delete highscores
