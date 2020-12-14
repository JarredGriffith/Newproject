//step 1
// a
let ages = [3, 9, 23, 64, 2, 8, 28,93];
console.log(ages[ages.length-1] - ages[ages.length-ages.length]);
//b
ages.push (52); // adding now number to array
console.log(ages[ages.length-1] - ages[ages.length-ages.length]); // subtracting the 1 and last numbers of the array. 

// C
let sumAges = 0;

for (let i = 0; i < ages.length;i++) {
    sumAges += ages[i]; //totaling the ages
}
console.log((sumAges/ages.length).toFixed(2)); //Avg age in array

//step 2
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sumNamelength = 0;
 // step 2 A
for (i=0;i<names.length;i++){
    sumNamelength += names[i].length;
}
console.log((sumNamelength/names.length).toFixed(2)); // remove decimals

//step 2 B
let allNames = "" // var for names to be displayed on one line
for (i in names) {
    allNames +=names[i] + " ";
}
console.log(allNames);
//step 3
console.log("Use array[array.length-1] to access the last element of any array" );
//step 4
console.log("Use array[0] to access the first element of any array" );
//step 5
let nameLengths = []

for (let i = 0;i<names.length;i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths)
//step 6
let sum = 0;
for (let i = 0; i<nameLengths.length;i++){
    sum += nameLengths[i];
}
console.log(sum)
//step 7
function stringTimes (word,n) {
    let repeatedtext = "";
while (n>0) {
    repeatedtext +=word;n--;
}
console.log(repeatedtext);
}

stringTimes("Hello",5);
//step 8
function fullname (firstName,lastName){
    console.log(firstName + " " + lastName);
}
fullname("Jarred","Griffith")

//step 9
let num = [100,34,56]
function sum100(number){
    let sumNumber = 0; 
    for (let i = 0; i<number.length;i++){
        sumNumber += number[i]
    }
    if(sumNumber>100){
        console.log(true);
    }
    else {console.log(false);}
}

sum100(num);
//step 10
let numToBeAvg = [3, 9, 23, 64, 2, 8, 28];
function avgNumber(number){
    totalNum = 0;
    for( let i = 0;i<number.length;i++) {
        totalNum += number[i]; 
    }
    console.log((totalNum/number.length).toFixed(2))
}
avgNumber(numToBeAvg)
//step 11
let firstAvg = [10,20,70,50]
let secondAvg = [1,30,40,38]

function avgArrays(number1,number2) {
    let one = 0;
    let two = 0; 
    for (let i = 0; i<number1.length;i++) {
        one += number1[i]; //get the total of array one
    }
    for (let a =0; a<number2.length;a++){
        two += number2[a]; 
    }
    if((one/number1.length)>(two/number2.length)){
        console.log(true);
    }
    else {console.log(false);}
}

avgArrays(firstAvg,secondAvg);

//step 12
let isHotOutside = true;
let moneyInPocket = 9.99;

function willBUyDrink(bool,money){
    if(bool=true && money>10.50){
        console.log(true);
    }
    else {console.log(false); 
    }
}
willBUyDrink(isHotOutside,moneyInPocket); 
//stpe 13
//this will find how much food you would need per number of cats you have. 

let numberOfCats = 3;
let cansPerCat = .5;
let costPerCan = 2;

function costForFood (numOfCat,canFotCat,costOfCan){
    let catCans = Math.ceil(numOfCat*canFotCat); //rounds up the cost
    let totalCost = catCans*costOfCan; 
    console.log("You have " + numOfCat + " cats, it will cost you $" + totalCost + " for their food." ); 
}

costForFood(numberOfCats,cansPerCat,costPerCan); 
