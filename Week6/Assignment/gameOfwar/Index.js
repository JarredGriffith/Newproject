/*
Coding Steps:
For the final project you will be creating an automated version of the classic card game WAR.
Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
-	Deal 26 Cards to two Players from a Deck. 
-	Iterate through the turns where each Player plays a Card
-	The Player who played the higher card is awarded a point
o	Ties result in zero points for either Player
-	After all cards have been played, display the score.
Write Unit Tests using Mocha and Chai for each of the functions you write.
*/

//Startinh decks computer 1 and computer 2
comp1 = []
comp2 = []

    class Deck {
        constructor() {
          this.deck = [];

          for( let i = 0; i<4;i++){
            for(let i =1;i<=13;i++){
              this.deck.push(i) 
            }
          }
      /*
          const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
          const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      
          for (let suit in suits) {
            for (let value in values) {
              this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
          } */
        }

        shuffle(){
          const { deck } = this;
          let m = deck.length, i;
      
          while(m){
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
          }
      
          return this;
        }
        
        splitDeck(){
          for(let i = 0; i<this.deck.length;i++){
            if(i%2){
            comp1.push(this.deck[i]);}
            else { 
            comp2.push(this.deck[i]); }
          }
        }
          
      }

      let test = new Deck()
      test.shuffle();
      test.splitDeck();
      console.log(comp1)
      console.log(comp2)
    //const deck1 = new Deck();
    //deck1.shuffle()
    //console.log(deck1.deck);
    class Game {
        constructor(){
            this.completeDeck = []
            this.player1 = []
            this.player2 = []
        }
    
        
        }
        
    function StartGame(deck) {
      let roundCounter  = 0
      let computer1Points = 0
      let computer2Points = 0
      while(roundCounter < 26){
        roundCounter = roundCounter +1
        let computer1 = comp1.pop()
        let computer2 = comp2.pop()
        //if player 1 wins gives point and disaply win in the console
        if(computer1>computer2) {
          //comp1.unshift(computer1,computer2)
          computer1Points = computer1Points+1
          console.log(`Computer 1 wins ${computer1} is Greater than ${computer2}, round ${roundCounter}`)
          //console.log(comp1)
        }
        //if player 2 wins gives point and disaply win in the console
        else if(computer2>computer1) {
          //comp2.unshift(computer1,computer2)
          computer2Points = computer2Points+1
          console.log(`Computer 2 wins ${computer2} is Greater than ${computer1}, round ${roundCounter}`)
        }
        else {console.log(`Round ${roundCounter} was a tie! ${computer1} = ${computer2}, No points givern!:(`)}
        
      }
      console.log(computer1Points); 
      console.log(computer2Points); 
      //console.log(comp1)
      if(computer1Points>computer2Points){
      //  alert("Computer 1 Wins!")
        console.log(`Computer 1 wins with ${computer1Points} points vs computer 2 with ${computer2Points} points`)
      } else {
       // alert("Computer 2 Wins!")
        console.log(`Computer 2 wins with ${computer2Points} points vs computer 1 with ${computer1Points} points`)
      }
      console.log(`Finle score 
      Computer 1 : ${computer1Points} 
      computer 2 : ${computer2Points}`)
    }

    StartGame();