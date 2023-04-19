import './style.css'

function winnerScreen() {
  window.winnerScreen = {};
  window.winnerScreen.handleClick = () => {
    let currentPlayer = document.querySelector('.arrow-down');
    let winScreen = document.querySelector('.winner');
    let playerScoreOne = document.querySelector('.player-score.one');
    let playerScoreTwo = document.querySelector('.player-score.two');
    const $boardGame = document.querySelector('.board-game');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-pair');
    $cardsActive.forEach((card) => card.classList.remove('-pair'));
    playerScoreOne.setAttribute('data-points', 0);
    playerScoreTwo.setAttribute('data-points', 0);
    currentPlayer.setAttribute('data-currentplayer', 1);
    setTimeout(() => {
      winScreen.style.display = 'none';
    }, 600)
  }

  return /*html*/ `
  <div class='winner'>
    <div class='winner-box container-winner-box'>
      <p class='player'></p>
      <p class='str-winner'>Winner !!!</p>
      <img class='trofeu'src='Images/trofeu.svg' alt='Figura de trofeu'>
      <button onClick='winnerScreen.handleClick()' class='restart-button'>restart</button>
    </div>
  </div>
  `;
}

export default winnerScreen;