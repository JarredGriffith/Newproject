//step 1
let ages = [3, 9, 23, 64, 2, 8, 28];
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
console.log(sumNamelength/names.length); // need to remove dismales

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
