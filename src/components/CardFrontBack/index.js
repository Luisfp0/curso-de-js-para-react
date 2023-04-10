import CardGame from '../CardGame/main';

function CardFrontBack() {
    return /*html*/ `
    <article class='card-front-back'>
      ${CardGame()}
      ${CardGame()}
    </article>
  `;
}

export default CardFrontBack;
