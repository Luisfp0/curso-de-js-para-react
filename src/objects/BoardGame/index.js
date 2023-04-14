import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';
import CardGame from '../../components/CardGame/main';

function BoardGame() {
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'));
  }

  const changePlayer = ($arrowDown) => {
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
  }

  window.boardGame = {};
  window.boardGame.handleClick = (event) => {
    const target = event.target;
    const $cardFrontBack = target.closest('.card-front-back');
    const imgCardBack = $cardFrontBack.querySelector('.card.-back .card-game .img-back');
    console.log(imgCardBack)


    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
    if ($cardsActive.length === 2) {
      if (imgCardBack) {
        console.log('talvez')
      }
      setTimeout(() => {
        flipAndHideCards($cardsActive);
        changePlayer($arrowDown);
      }, 1000);
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
