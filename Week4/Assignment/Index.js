//Step 1
let firstName = "Jarred";
let lastName = "Griffith";

function full (fName, lName){
    console.log(`${fName} ${lName}`); 
}
full(firstName,lastName);

//Step 2
let name = {fName:"Jim", lName:"Smith"}; 
let fullName = (first,last) => console.log(`My name is ${first} ${last}`); 
fullName(name.fName,name.lName);

//step 3 

//Step 3 A
let timesOut = () => setTimeout(function(){alert(`Time is up ${firstName}`);},1000);
//timesOut();

//Step 3 B 

let askAreWeThereYet = () => alert("Are We there yet");
//setInterval(askAreWeThereYet, 3000);

//Step 4 
let processSplicedValue = (num1,num2,arrays) => {
    let indexElement
}
