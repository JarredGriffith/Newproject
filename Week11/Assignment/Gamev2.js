//game status, able to use later. to display whos turn it is.
const statusDis =  document.querySelector('.game--status'); 

let gameActive = true;
let currentPlayer = "X"; 
// every cell on the board. tracks whats been clicked. 
let gameState = ["", "", "", "", "", "", "", "", ""];

// the different messages to disaplay. 
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//updates the current player text. 
statusDis.innerHTML = currentPlayerTurn(); 
//winning combos
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

