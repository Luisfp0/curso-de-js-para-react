import PlayerScore from '../../components/PlayerScore/intex';
import VsPlayer from '../../components/VsPlayer';
import PlayerName from './../../components/PlayerName';
import './style.css';

function ScoreBoard() {
  return /*html*/ `
      <header class='score-board'>
        ${PlayerName('Player1')}
        ${PlayerScore(1)}
        ${VsPlayer()}
        ${PlayerScore()}
        ${PlayerName('Player2')}
      </header>
  `;
}

export default ScoreBoard;
