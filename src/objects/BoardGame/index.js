import './style.css';
import CardGame from '../../components/CardGame/main.js';

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /*httml*/ `
    <section class="board-game">
        ${$htmlContent}
    </section>`;
}
export default BoardGame;
