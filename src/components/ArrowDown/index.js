import './style.css';

function ArrowDown(currentPlayer) {
  return /*html*/`
  <img class='arrow-down'
      data-currentplayer='${currentPlayer}'
      src='/Images/IconArrowDown.svg' 
      alt='Ícone de uma seta para baixo'>
`;
}

export default ArrowDown;