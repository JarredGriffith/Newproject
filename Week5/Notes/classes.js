/*
// all first letter cap
class student {
    constructor () {
        // when using the class this we set the value. 
        this.firstName = "Jarred";
        this.lastName = "Griffith";
        this.number = "7025044444";
        this.grade = "A";
    }
}
*/ 

class student {
    constructor (firstName,lastName,number,grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.grade = grade;
    }
    // this is a function
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.number}`);
    }
}
// when making a new class must have new.
let student1  = new student("tessa","Kilbride","7025044040","A"); 
let student2  = new student("Jarred","Kilbride","7025044444","A"); 


student1.introduce();
student2.introduce();