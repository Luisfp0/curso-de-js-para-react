import './style.css'

function winnerScreen() {
  return /*html*/ `
  <div class='winner'>
    <div class='winner-box container-winner-box'>
      <p class='player'>Player 1</p>
      <p class='str-winner'>Winner !!!</p>
      <img class='trofeu'src='Images/trofeu.svg' alt='Figura de trofeu'>
      <button class='restart-button'>restart</button>
    </div>
  </div>
  `;
}

export default winnerScreen;