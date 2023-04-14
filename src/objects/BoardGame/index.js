import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';

function BoardGame() {
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'));
  }

  const changePlayer = ($arrowDown) => {
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
  }
  let clickScreen = 0;
  let click1 = 0;
  let click2 = 0;

  window.boardGame = {};
  window.boardGame.handleClick = (event) => {
    console.log(clickScreen)
    const target = event.target;
    const $cardFrontBack = target.closest('.card-front-back');
    const imgCardBack = $cardFrontBack.querySelector('.card.-back .card-game .img-back');
    if (clickScreen === 0) {
      click1 = imgCardBack;
      clickScreen++;
      console.log("Esse é o click 1", click1)
    } else {
      click2 = imgCardBack;
      console.log("Esse é o click 2", click2)
      clickScreen = 0;
    }
    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
    if ($cardsActive.length >= 2) {
      if (click1.src === click2.src) {
        console.log('Deu certo');
      } else {
        setTimeout(() => {
          flipAndHideCards($cardsActive);
          changePlayer($arrowDown);
        }, 1000)
      };
    };
  }
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = htmlCardsList.join('');
  return /*html*/ `
    <section class="board-game" onClick='boardGame.handleClick(event)'>
        ${$htmlCards}
    </section>`;
}

export default BoardGame;
