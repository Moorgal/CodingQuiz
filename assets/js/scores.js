const highscores = document.querySelector('#highscores');
const clearButton = document.querySelector('#clear');

let highScorePlayer = JSON.parse(localStorage.getItem('player'));
console.log(highScorePlayer);
if (highScorePlayer) {
  highscores.innerHTML = `<li>${highScorePlayer.userName}  ${highScorePlayer.score}</li>`;
} else {
  highscores.innerHTML = ' ';
}

clearButton.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
  location.reload();
}
