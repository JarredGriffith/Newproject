// cal calls 
//1 add class, 2 delete call, 3 view new class, 4 view all class, and 0 exit 
// get a total of studies 

class Kids {
    constructor(input,outcome) {
        this.input = input; 
        this.outcome = outcome; 
    }
    display() {
        return `${this.input} = ${this.outcome}`; 
    }
}

class cal2 {
    constructor(input) {
        this.input = input; 
        this.passcal = [];  
    }
}



class mainMenu {
    constructor() {
        this.storedNums = [];
        this.NumSelected  = null;
    }
    start() {
        let Select = this.frontmenu(); 
        while (Select != 0){
            switch(Select) {
            case '1':
            this.addNum()
            break; 
            case '2':
            this.deleteNum()
            break; 
            case '3':
            this.seeAllNums()
            break; 
            case '4':
            this.addNums()
            break;     
            default : Select = 0
        }
        Select = this.frontmenu()
        }
        alert("Now leaving app, Goodbye")
    }

    //Main Mune Selection
    frontmenu() {
        return prompt(`
        Welcome to the Number adder, please select the following.
        1) Add Number 
        2) Delete Number
        3) See all numbers
        4) add all Numbers
        0) Exit the App
        `
        )    
    }
    addNum() {
        let adding = prompt('Please provide the wanted to add.');
        this.storedNums.push(new cal2(adding)); 
        console.log(typeof this.storedNums[0])
    }
    seeAllNums() {
        let allNum = ''
        for(let i = 0; i<this.storedNums.length;i++) {
            allNum += i + ' )' +  this.storedNums[i].input + '\n'
        }
        alert(allNum);
    }   
    deleteNum() {
        let index = prompt('enter index number to remove');
        if(index>-1 && index<this.storedNums.length) {
            this.storedNums.splice(index,1); 
        }
    }
    addNums() {
        let total = ''
        for(let i = 0; i<this.storedNums.length;i++) {
            total += this.storedNums[i].input
        }
        alert(total);
    }


 }
 let menu = new mainMenu();
 menu.start(); 
