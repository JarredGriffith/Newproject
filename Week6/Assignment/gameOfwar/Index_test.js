var expect = chai.expect;

/*
describe("MyFunctions",function(){
    describe("#doSomething",function(){
        it("should have two pams",function(){
            var x = doSomething("Hello",5); 
            expect(x).to.equal("Hello5");
        });
        it("Will throw error is 1st parm is not a string", function(){
            expect(function(){
                doSomething(5,5);
            }).to.throw(Error);
        });
    });
});
*/
describe('Game of war', function() {
    describe('Card name', function() {
      it('should provide the card name', function() {
        let p = new Deck();
       let i =  p.cardNames(13);
        expect(i).to.equal("King");
      });
    });
    describe('Creat a deck', function() {
        describe('deck', function() {
          it('there shoud be 52 cards', function() {
            let p = new Deck()
            expect(p.deck.length).to.equal(52);
          });
        });
    });
    describe('deal deck', function() {
        describe('split and deal cards', function() {
          it('there should be two decks of 26', function() {
            comp1 = []
            comp2 = []
            let p = new Deck()
            p.splitDeckAndDeal()
            expect(comp1.length).to.equal(26);
            expect(comp2.length).to.equal(26);
          });
        });
    });
});
