import './style.css';
import CardGame from '../CardGame/main';

function CardFrontBack() {
  var player = 1;
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    var $arrowMove = document.querySelector('.arrow-down');
    var $countActive = 0;
    var $cards = document.querySelectorAll('.card-front-back')
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');
    for (let i = 0; i < $cards.length; i++) {
      if ($cards[i].classList.contains('-active')) {
        $countActive++;
      }
    }
    setTimeout(() => {
      if ($countActive === 2) {
        if (player === 1) {
          player = 2;
          $arrowMove.classList.remove('-left')
          $arrowMove.classList.add('-right')
        } else {
          player = 1
          $arrowMove.classList.remove('-right')
          $arrowMove.classList.add('-left')
        }
        for (let i = 0; i < $cards.length; i++) {
          $cards[i].classList.remove('-active')
        }
      }
    }, 1000);
  };


  return /*html*/ `
    <article class='card-front-back' onClick="cardFrontBack.handleClick(event)">
      <div class='card -front'>
        ${CardGame()}
      </div>
      <div class='card -back'>
        ${CardGame('css', 'Logo do Css')}
      </div>
    </article>
  `;
}

export default CardFrontBack;