import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import CardGame from './src/components/CardGame/main';
import './src/styles/elements/base.css';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();
$root.insertAdjacentHTML('beforeend', $htmlCardGame);
