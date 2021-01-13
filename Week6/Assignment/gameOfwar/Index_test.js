var expect = chai.expect;

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

chai.expect