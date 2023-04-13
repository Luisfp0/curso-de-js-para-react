import './style.css';
import CardGame from '../CardGame/main';

function CardFrontBack() {
  var $player = 1;
  function quantActive($cards, $countCards) {
    for (let i = 0; i < $cards.length; i++) {
      if ($cards[i].classList.contains('-active')) {
        $countCards++;
      }
    }
    return $countCards;
  };
  function resetGame(returnQuantActive, $arrowDown, $cards) {
    setTimeout(() => {
      if (returnQuantActive === 2) {
        if ($player === 1) {
          $player = 2;
          $arrowDown.classList.remove('-left');
          $arrowDown.classList.add('-right');
        } else {
          $player = 1;
          $arrowDown.classList.remove('-right');
          $arrowDown.classList.add('-left');
        }
        for (let i = 0; i < $cards.length; i++) {
          $cards[i].classList.remove('-active');
        }
      }
    }, 1000);
  };
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    let $arrowDown = document.querySelector('.arrow-down');
    let $countCards = 0;
    let $cards = document.querySelectorAll('.card-front-back');
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');

    //PEGANDO A QUANTIDADE DE ITEMS COM ACTIVE
    let returnQuantActive = quantActive($cards, $countCards);
    //FAZENDO OS CARDS VIRAREM ASSIM QUE DOIS COM CLASSE ACTIVE SÃO DETECTADOS
    //FAZENDO A ARROWDOWN SE MOVER DA DIRETA PARA A ESQUERDA
    resetGame(returnQuantActive, $arrowDown, $cards);
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
};

export default CardFrontBack;