import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Logo da alura') {
    return /*html*/ `
    <article class="card-game">
      <img src="Images/${icon} 1.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;
