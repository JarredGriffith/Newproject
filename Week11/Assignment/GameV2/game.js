//game board
let origBoard;
//the game status, if false it wont let you click cells
let gameActive = 'false'
//player, this will change to x
let player1 = "O";
//cells needed to win
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Displays whos turn it is
const playerDisplay = document.getElementById('turn-display');
const currentPlayer = () => `it's ${player1}'s turn`;
playerDisplay.innerHTML = currentPlayer();

//changes player from x to o
function handlePlayerChange() {
    //if current player is x then o else x
    player1 = player1 === "X" ? "O" : "X";
    playerDisplay.innerHTML = currentPlayer();
}

//grabs all the cells
let cells = document.querySelectorAll(".cell");

function startGame() {
    //turn the game to a active state
    gameActive = true
    //going to push an array of 9 elements (evey cell on the board)
    origBoard = ["", "", "", "", "", "", "", "", ""];
    //loops through all the cells and clears any text if any. also starts the game. 
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        //this will start the game, and waits for a user to click. 
        cells[i].addEventListener('click', turnClick, false);
    }
}


//will track the click
function turnClick(cell) {
    //this checks if the game is active and if it isnt then it wont start
    if (!gameActive) {
        return;
    }
    //this call the function that inputs the text and checks if the cell has been clicked before
    turn(cell.target.id, player1)
    //checks to see if anyone won. 
    gameval();
}

//checks on click
function turn(id, player) {
    //check to make sure the cell hasn't been clicked.
    if (origBoard[id] !== '') {
        return;
    }
    //if not click it will move forward and push the X/O into with index of the cell user clicked. 
    origBoard[id] = player;
        //changes player
        handlePlayerChange()
    //submits the text
    document.getElementById(id).innerHTML = player
    //for testing reasons
    //console.log(origBoard)

}

//function to check if anyone won the game. 
function gameval() {
    let roundstate = false;
    // blank var to put the winner in for the banner display.
    let winningPlayer =''; 
    //loops though all clicked cells and the winning combos to see if anyone won the game. 
    for (let i = 0; i <= 7; i++) {
        const win = winCombos[i];
        let a = origBoard[win[0]];
        let b = origBoard[win[1]];
        let c = origBoard[win[2]];
        // if it find cells blank then it keeps looping
        if (a === '' || b === '' || c === '') {
            continue;
        }
        //if it finds a match with a winning combo then it stops and makes sure the winning
        // combos has all mataching inputs like all items must be a x or a o 
        // if this matching then it set the roundstate to true 
        if (a === b && b === c) {
            roundstate = true;
            winningPlayer = a;
            break
        }
    }
    //displays winning message if the roundstate is set to true. 
    if (roundstate) {
        gameActive = false;
        banner(winningPlayer)
        return
    }

    //this checks if there is a draw by looking to see if there is any blank elements in the origboard. 
    let roundDraw = !origBoard.includes("");
    if (roundDraw) {
        gameActive = false;
        banner()
        return;
    }
}

//creates banner if it was a tie or a draw
function banner(player) {
    let roundDraw = !origBoard.includes("");
    if (roundDraw) {
        let banner = document.getElementById('banner')
        let ban = document.createElement('p');
        ban.className = 'alert alert-danger text-center'
        ban.id = "ban"
        ban.innerHTML = `Game ended in a draw`
        banner.appendChild(ban)
    } else {
        let banner = document.getElementById('banner')
        let ban = document.createElement('p');
        ban.className = 'alert alert-success text-center'
        ban.id = "ban"
        ban.innerHTML = `${player} WINS THE GAME!!`
        banner.appendChild(ban)
    }
}

//removes banner 
function removeBanner() {
    let banner = $('#banner')
    banner.empty()
}
startGame();
//restart button to clear the board and start a game also removes the banner. 
document.getElementById('restart').addEventListener('click', () => {
    startGame();
    removeBanner()
})