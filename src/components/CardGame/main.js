import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Logo da alura') {
  return /*html*/ `
    <article class="card-game">
      <img class='img-back' src="Images/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;
