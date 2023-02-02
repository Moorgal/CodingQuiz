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
let selectedQuestions = []; // array to store the questions what will be asked
sessionStorage.setItem('score', 0); // storage where the score got saved
let correctAudio = new Audio('./assets/sfx/correct.wav');
let inCorrectAudio = new Audio('./assets/sfx/incorrect.wav');
counter = 0; // counts how many question got asked
let timeLeft = 60; // time left to answer the questions

// ------------------------------------------------------------------------------------------------------------------------------------
// on click the quiz starts. if no more time or answered all 5 questions, then time stops , questions dissapear and page moves to the highscore table. Else asks another questions
// ------------------------------------------------------------------------------------------------------------------------------------

startButton.addEventListener('click', function () {
  var interval = setInterval(function () {
    if (timeLeft <= 0 || counter > 4) {
      clearInterval(interval);
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

// ------------------------------------------------------------------------------------------------------------------------------------
// function what updates the scores.
// ------------------------------------------------------------------------------------------------------------------------------------
function updateScores(num) {
  let baseScore = sessionStorage.getItem('score');
  baseScore = parseInt(baseScore) + num;
  sessionStorage.setItem('score', baseScore);
}

function setLocalStorage() {
  score = sessionStorage.getItem('score');
  finalScore.innerHTML = `${score}`;
}

// ------------------------------------------------------------------------------------------------------------------------------------
// function what creates selectedQuestion[]. Choose 5 random questions from the lists of questions. It saves 5 indexes to the array
// ------------------------------------------------------------------------------------------------------------------------------------
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

// ------------------------------------------------------------------------------------------------------------------------------------
// function what creates saves the scores and initials of the player to localstore
// ------------------------------------------------------------------------------------------------------------------------------------
function submit() {
  let player = {
    userName: initials.value.toUpperCase().trim(),
    score: sessionStorage.getItem('score'),
  };
  localStorage.setItem('player', JSON.stringify(player));
  location.href = './highscores.html';
}

submitButton.addEventListener('click', submit);

// ------------------------------------------------------------------------------------------------------------------------------------
// function what renders the questions what previously was choose to selectedQuestions[]
// ------------------------------------------------------------------------------------------------------------------------------------

function quizQuestion() {
  questionTitle.textContent = questions[selectedQuestions[counter]].question; // renders the question from the questions object. SelectedQuestions stores array of indexes. Counter goes through 1 to 5 on the indexes
  quizAnswers = questions[selectedQuestions[counter]].answers; // same as with questionTitle but with the answers
  let buttons = '';
  for (let i = 0; i < quizAnswers.length; i++) {
    // creates the buttons with all the answers
    buttons += `<button class="btn">${questions[selectedQuestions[counter]].answers[i]}</button>`;
    questionChoices.innerHTML = buttons;
  }
  let btns = document.querySelectorAll('button');
  btns.forEach(function (i) {
    // checks the answers
    i.addEventListener('click', function () {
      if (i.innerHTML === questions[selectedQuestions[counter]].correctAnswer) {
        // if it is correct, it updates the scores and rerun the function with the next question (counter++)
        feedback.classList.remove('hide');
        feedback.textContent = 'Correct';
        correctAudio.play();
        counter++;
        updateScores(5);
        // quizQuestion();
      } else {
        // if incorrect it deduct 5 sec from the time left for the quiz, rerun the function with the next question (counter++)
        feedback.classList.remove('hide');
        feedback.textContent = 'Wrong';
        timeLeft = timeLeft - 5;
        inCorrectAudio.play();
        counter++;
        updateScores(-2);
        // quizQuestion();
      }
    });
  });
}
