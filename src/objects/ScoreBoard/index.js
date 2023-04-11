import PlayerName from './../../components/PlayerName';
import playerScore from '../../components/PlayerScore/intex';
import arrowDown from '../../components/Arrowdown';
import './style.css';

function ScoreBoard() {
    return /*html*/ `
    
      <header class='score-board'>
        <p class='arrow-down'>${arrowDown()}</p>
          <div class='player-1'>
              <p>${PlayerName('Player1')}</p>
              ${playerScore()}
          </div>
          <p class='sandstorm'>vs</p>
          <div class='player-2'>
              ${playerScore()}
              <p>${PlayerName('Player2')}</p>
        </div>
      </header>
  `;
}

export default ScoreBoard;
