import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';
import winnerScreen from './src/components/winnerScreen';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
  `
    ${winnerScreen()}
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
);
//Alteração antes dos desafios
