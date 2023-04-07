import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import CardGame from './src/components/CardGame/main';
import player from './src/components/Player/main';

import './src/styles/elements/base.css';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();
const $htmlplayer = player();
$root.insertAdjacentHTML('beforeend', $htmlCardGame);
$root.insertAdjacentHTML('beforeend', $htmlplayer);
