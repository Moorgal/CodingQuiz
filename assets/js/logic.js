const time = document.querySelector('#time');
const timerSet = document.querySelector('.timer');
const startButton = document.querySelector('#start');
const questionForm = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const questionChoices = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
const initials = document.querySelector('#initials');
const submitButton = document.querySelector('#submit');
const feedback = document.querySelector('#feedback');
let selectedQuestions = [];
sessionStorage.setItem('score', 0);
let correctAudio = new Audio('./assets/sfx/correct.wav');
let inCorrectAudio = new Audio('./assets/sfx/incorrect.wav');
counter = 0;
let timeLeft = 6;

startButton.addEventListener('click', function () {
  var interval = setInterval(function () {
    if (timeLeft <= 0 || counter > 4) {
      clearInterval(interval);
      console.log('hey ho captain jack');
      questionForm.classList.add('hide');
      endScreen.classList.remove('hide');
      timerSet.classList.add('hide');
      feedback.classList.add('hide');
      setLocalStorage();
      return;
    } else {
      selectedQuestions = selectQuestions();
      timeLeft--;
      time.textContent = timeLeft;
      questionForm.classList.remove('hide');
      startButton.classList.add('hide');
      quizQuestion();
    }
  }, 1000);
});

// update scores
function updateScores(num) {
  let baseScore = sessionStorage.getItem('score');
  baseScore = parseInt(baseScore) + num;
  sessionStorage.setItem('score', baseScore);
}

function setLocalStorage() {
  score = sessionStorage.getItem('score');
  finalScore.innerHTML = `${score}`;
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

function submit() {
  let player = {
    userName: initials.value.toUpperCase().trim(),
    score: sessionStorage.getItem('score'),
  };
  localStorage.setItem('player', JSON.stringify(player));
  location.href = './highscores.html';
}

submitButton.addEventListener('click', submit);

function quizQuestion() {
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
        correctAudio.play();
        counter++;
        updateScores(5);
        quizQuestion();
      } else {
        feedback.classList.remove('hide');
        feedback.textContent = 'Wrong';
        timeLeft = timeLeft - 5;
        inCorrectAudio.play();
        counter++;
        updateScores(-2);
        quizQuestion();
      }
    });
  });
}
