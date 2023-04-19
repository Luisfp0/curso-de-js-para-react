import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';

function BoardGame() {
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'));
  }

  const changePlayer = ($arrowDown, currentPlayer) => {
    console.log('changePlayer', currentPlayer)
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
  }
  let clickScreen = 0;
  let click1 = 0;
  let click2 = 0;

  window.boardGame = {};
  window.boardGame.handleClick = (event) => {
    const $arrowDown = document.querySelector('.arrow-down');
    const currentPlayer = Number($arrowDown.getAttribute('data-currentplayer'));
    let playerScoreOne = document.querySelector('.player-score.one');
    let playerScoreTwo = document.querySelector('.player-score.two');
    let dataPointsOne = Number(playerScoreOne.getAttribute('data-points'));
    let dataPointsTwo = Number(playerScoreTwo.getAttribute('data-points'));
    let winnerScreen = document.querySelector('.winner');
    let player = document.querySelector('.player')
    const target = event.target;
    const $cardFrontBack = target.closest('.card-front-back');
    if ($cardFrontBack === null) {
      return;
    }
    const imgCardBack = $cardFrontBack.querySelector('.card.-back .card-game .img-back');
    if (clickScreen === 0) {
      click1 = imgCardBack;
      clickScreen++;
    } else {
      click2 = imgCardBack;
      clickScreen = 0;
    }
    const $boardGame = document.querySelector('.board-game');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
    if ($cardsActive.length === 2) {
      if (click1.src === click2.src) {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
        $cardsActive.forEach((card) => card.classList.add('-pair'));
        if (currentPlayer === 1) {
          playerScoreOne.setAttribute('data-points', ++dataPointsOne);
        } else {
          playerScoreTwo.setAttribute('data-points', ++dataPointsTwo);
        }
      } else {
        setTimeout(() => {
          flipAndHideCards($cardsActive);
          changePlayer($arrowDown, currentPlayer);
        }, 1000)
      };
    };
    if (dataPointsOne + dataPointsTwo === 3) {
      winnerScreen.style.display = 'block';
      player.innerHTML = 'Player' + currentPlayer;
    }
  }
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = htmlCardsList.join('');
  return /*html*/ `
    <section class="board-game container-board-game" onClick='boardGame.handleClick(event)'>
        ${$htmlCards}
    </section>`;
}

export default BoardGame;
