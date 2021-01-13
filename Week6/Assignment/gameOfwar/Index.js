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

class Users {
    constructor(playerName,playerdeck) {
        this.playerName = playerName
        this.playerdeck = playerdeck
    }}
    //this creates the deck
    class Deck {
        constructor() {
          this.deck = [];
      
          const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
          const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      
          for (let suit in suits) {
            for (let value in values) {
              this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
          }
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
    } 

    //const deck1 = new Deck();
    //deck1.shuffle()
    //console.log(deck1.deck);

    class Game {
        constructor(){
            this.completeDeck = []
            this.player1 = []
            this.player2 = []
        }
        gameshuffle() {
            let decks = new Deck()
            decks.shuffle
            this.completeDeck.push(decks.deck)
        }
        splitDeck(){
            let deckToSplit = this.completeDeck
            let player1deck = deckToSplit.splice(0,26)
            let player2deck = deckToSplit

            this.player1 = new Users("User 1",player1deck); 
            this.player2 = new Users("User 2",player2deck); 

        }


    }