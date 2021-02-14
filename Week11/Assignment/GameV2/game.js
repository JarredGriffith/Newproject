let origBoard; 
let player1 = "O";
const player2 = "X";
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

//changes player from x to o
function handlePlayerChange() {
//if current player is x then o else x
player1 = player1 === "X" ? "O" : "X";
}




//grabs all the cells
let cells = document.querySelectorAll(".cell"); 
//calling the start game. 
//getElementByclass('.restart').addEventListener('click',startGame())

startGame(); 

function startGame (){
    //going to push an array of 9 elements so 1-9
    origBoard = Array.from(Array(9).keys())
    //loops through all the cells and clears them then waits for a click.
    for(let i =0;i<cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click',turnClick,false); 
    }
}

//will track the click
function turnClick(cell) {
    turn(cell.target.id,player1)
    gameval(); 
    handlePlayerChange() 

}

function turn(id,player) {
    origBoard[id] = player; 
    document.getElementById(id).innerHTML = player
    console.log(origBoard)

}

function gameval () {
let roundstate = false; 
for(let i =0; i<=7;i++){
const win = winCombos[i]; 
console.log(win)
let a = origBoard[win[0]];
let b = origBoard[win[1]];
let c = origBoard[win[2]];

if (a === b && b === c) {
    roundstate = true;
    break
}
}
if (roundstate) {
    alert("win")
}
}




//restart button to clear the board and start a game. 
document.getElementById('restart').addEventListener('click',()=> startGame())