import PlayerScore from '../../components/PlayerScore/intex';
import VsPlayer from '../../components/VsPlayer';
import PlayerName from './../../components/PlayerName';
import ArrowDown from '../../components/ArrowDown';
import './style.css';

function ScoreBoard() {
  return /*html*/ `
      <header class='score-board container-score-board'>
        ${ArrowDown(1)}
        ${PlayerName('Player1')}
        ${PlayerScore('one')}
        ${VsPlayer()}
        ${PlayerScore('two')}
        ${PlayerName('Player2')}
      </header>
  `;
}

export default ScoreBoard;
