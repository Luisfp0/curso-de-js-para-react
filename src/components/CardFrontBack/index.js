import './style.css';
import CardGame from '../CardGame/main';

function CardFrontBack() {
    return /*html*/ `
    <article class='card-front-back'>
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
