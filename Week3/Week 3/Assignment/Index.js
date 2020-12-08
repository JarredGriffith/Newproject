//step 1
let ages = [3, 9, 23, 64, 2, 8, 28,93];
console.log(ages[ages.length-1] - ages[ages.length-ages.length]);
ages.push (52); // adding now number to array
//step 2
console.log(ages[ages.length-1] - ages[ages.length-ages.length]); // subtracting the 1 and last numbers of the array. 

//step 3
let sumAges = 0;

for (let i = 0; i < ages.length;i++) {
    sumAges += ages[i]; //totaling the ages
}
console.log(sumAges/ages.length); //Avg age in array

//step 4 
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sumNamelength = 0;

//step 5
for (i=0;i<names.length;i++){
    sumNamelength += names[i].length;
}
console.log(sumNamelength/names.length); // need to remove decimals

//step 6
let allNames = "" // var for names to be displayed on one line
for (i in names) {
    allNames +=names[i] + " ";
}
console.log(allNames);
//step 7
console.log("Use array[array.length-1] to access the last element of any array" );
//step 8
console.log("Use array[0] to access the first element of any array" );
//step 9
let nameLengths = []

for (let i = 0;i<names.length;i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths)
//step 10 
let sum = 0;
for (let i = 0; i<nameLengths.length;i++){
    sum += nameLengths[i];
}
console.log(sum)
//step 11
function stringTimes (word,n) {
    let repeatedtext = "";
while (n>0) {
    repeatedtext +=word;n--;
}
console.log(repeatedtext);
}

stringTimes("Hello",5);
//step 12
function fullname (firstName,lastName){
    console.log(firstName + " " + lastName);
}
fullname("Jarred","Griffith")

//step 13
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
//step 14
let numToBeAvg = [3, 9, 23, 64, 2, 8, 28];
function avgNumber(number){
    totalNum = 0;
    for( let i = 0;i<number.length;i++) {
        totalNum += number[i]; 
    }
    console.log(totalNum/number.length)
}
avgNumber(numToBeAvg)
//step 15
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

//step 16
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
//stpe 17 
//dederman how much food you would need per number of cats you have. 

let numberOfCats = 3;
let cansPerCat = .5;
let costPerCan = 2;

function costForFood (numOfCat,canFotCat,costOfCan){
    let catCans = Math.ceil(numOfCat*canFotCat); //rounds up the cost
    let totalCost = catCans*costOfCan; 
    console.log("You have " + numOfCat + " cats, it will cost you $" + totalCost + " for their food." ); 
}

costForFood(numberOfCats,cansPerCat,costPerCan); 
