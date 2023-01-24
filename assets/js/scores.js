const highscores = document.querySelector('#highscores');
const clearButton = document.querySelector('#clear');

let highScorePlayer = JSON.parse(localStorage.getItem('player'));
console.log(highScorePlayer);
highscores.innerHTML = `<li>${highScorePlayer.userName}  ${highScorePlayer.score}</li>`;

clearButton.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
  location.reload();
}
