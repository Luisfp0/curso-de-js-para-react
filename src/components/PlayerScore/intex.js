import './style.css';

function PlayerScore(customClass, points = 0) {
  const classe = 'player-score ' + customClass
  return /*html*/`
  <ol class='${classe}' data-points='${points}'>
    <li class='pointer'>um</li>
    <li class='pointer'>dois</li>
    <li class='pointer'>três</li>
  </ol>
  `;
}

export default PlayerScore;