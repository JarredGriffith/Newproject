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

//these are blank arrays for both computer hands. 
comp1 = []
comp2 = []


    class Deck {
        constructor() {
          this.deck = [];
          const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
          // creates the deck and pushes to the deck array. 
          
          for (let suit in suits) {
            for(let i =1;i<=13;i++){
              this.deck.push({suit: suits[suit], value:i,cardname: this.cardNames(i)} ) 
            }
          }
        }

        //shuffles the deck
        shuffle(){
          const { deck } = this;
          let m = deck.length, i;
      
          while(m){
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
          }
      
          return this;
        }
        //this will split the deck and deal the cards to the comp1 and comp2 arrays. 
        splitDeckAndDeal(){
          for(let i = 0; i<this.deck.length;i++){
            if(i%2){
            comp1.push(this.deck[i]);}
            else { 
            comp2.push(this.deck[i]); }
          }
        }
        //this function is to rename the number value to the corresponding card value. 
        cardNames(i) {
          switch(i) {
            case 11:
              return "Jack";
              break; 
            case 12:
              return "Queen";
              break; 
            case 13:
              return "King";
              break; 
            case 1:
              return "Ace";
              break; 
            default:
              return i   
          }
        }
      }

      //makes the deck then deals the card to the computers hands.
      let test = new Deck()
      test.shuffle();
      console.log(test.deck);
      test.splitDeckAndDeal();
      //for testing to see the player hands. 
      //console.log(comp1)
      //console.log(comp2)

    //start of the game. 
    function StartGame() {
      let roundCounter  = 0
      let computer1Points = 0
      let computer2Points = 0

      while(roundCounter < 26){
        roundCounter = roundCounter +1
        let computer1 = comp1.pop()
        let computer2 = comp2.pop()
        //if player 1 wins gives point and disaply win in the console
        if(computer1.value>computer2.value) {

          computer1Points = computer1Points+1
          console.log(`Computer 1 wins ${computer1.cardname} of ${computer1.suit} is Greater than ${computer2.cardname} of ${computer2.suit}, round ${roundCounter}`)
        }
        //if player 2 wins gives point and disaply win in the console
        else if(computer2.value>computer1.value) {
         
          computer2Points = computer2Points+1
          console.log(`Computer 2 wins ${computer2.cardname} of ${computer2.suit} is Greater than ${computer1.cardname} of ${computer1.suit}, round ${roundCounter}`)
        }
        //this for the tie. no points givin. 
        else {

          console.log(`Round ${roundCounter} was a tie! ${computer1.cardname} of ${computer1.suit} = ${computer2.cardname} of ${computer2.suit}, No points givern!:(`)}
        
      }
      if(computer1Points>computer2Points){
        console.log(`Computer 1 wins with ${computer1Points} points vs computer 2 with ${computer2Points} points`)
      } else {
        console.log(`Computer 2 wins with ${computer2Points} points vs computer 1 with ${computer1Points} points`)
      }
      console.log(`Finle score 
      Computer 1 : ${computer1Points} 
      computer 2 : ${computer2Points}`)
    }

    StartGame();
