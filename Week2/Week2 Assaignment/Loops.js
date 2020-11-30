
// A while loop that prints all even numbers from 0 to 100
let number = 0 
while( number < 100) {
number +=2;
console.log(number);
}
// A while loop that prints every 3rd number going backwards from 100 until we reach 0
    let number2 = 100
while( number2 > 0) {
    number2-=3; 
    if(number2>=0) {
    console.log(number2);
    }
}
// A for loop that prints every other number from 1 to 100
for (i = 1; i<=100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
/*A for loop that prints every number from 0 to 100, but if the number is divisible by 3, 
it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number,
 and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number*/

for (i = 0; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("Hello World");
    }
     else if (i % 5 == 0) {
        console.log("World");
    }
     else if  (i % 3 == 0) {
        console.log("Hello");
    }
    else (console.log(i)); 
}