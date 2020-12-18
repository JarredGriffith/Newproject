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
timesOut();

//Step 3 B 

let askAreWeThereYet = () => alert("Are We there yet");
setInterval(askAreWeThereYet, 3000);

//Step 4 A.B.C

let processSplicedValue = (index,arrays,callBack) => {
let i = arrays.splice(index,1);
callBack(i);
}

let arraysToBeSpliced = ["One","Two","Three","four","five"];

//Step D
processSplicedValue(0,arraysToBeSpliced,console.log); 
//Step 4 E
processSplicedValue(0,arraysToBeSpliced,alert); 
//Step 4 F
processSplicedValue(1,arraysToBeSpliced,fun =>alert(fun)); 
//Step 4 G
//displays spliced value in body of the web site
processSplicedValue(1,arraysToBeSpliced,Write =>document.write(Write));