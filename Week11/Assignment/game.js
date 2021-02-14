const gamestatus = $('.game--status')
const statusDisplay = document.querySelector('.game--status');
console.log(statusDisplay)

let gameActive = true; 
let currentPlayer = "X"; 
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick(clickedCellEvent) {
    //grabs clicked target
    const clickedCell = clickedcellEvent.target; 
    //turns the clicked target into a number.
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
      );
      //vals game makes sure clicked target as not been clicked. 
      if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;}
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

function handleRestartGame() {

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);