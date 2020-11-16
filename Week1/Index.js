var candyPrice  = 2.45;
var burgerPrice =  10.99; 

var womanWalletAmount = 50;
var ManWalletAmounrt = 35;

var womanNumOfFriends = 15;
var manNumOfFriends = 24;

var womanAge = 26;
var manAge = 27;

var womanfirstName = "tessa";
var manFirstName = "Jarred";

var womnaLastName = "kilbride";
var manLastName = "Griffith";

var womanMiddleInitial = "N";
var manMiddleInitial = "M";

var WomanAvgNumOfFriends = (womanNumOfFriends / womanAge); //Getting Avg numebr of firends made per year by Tessa
var manAvgNumofclosefriends = (manNumOfFriends / manAge); //Getting Avg numebr of firends made per year by Jarred

var wonmanFriendsPerYear  =  WomanAvgNumOfFriends.toFixed(2); //Removing unwanted decimals 
var manFriendsPerYear = manAvgNumofclosefriends.toFixed(2); //Removing unwanted decimals 

console.log(womanfirstName + "s total amount in wallet after perchasing a burger is " + (womanWalletAmount - burgerPrice)); 
console.log(manFirstName + "s total amount in wallet after perchasing Candy is " + (ManWalletAmounrt - candyPrice)); 

console.log(womanfirstName + " avg number of friends made per year is " + wonmanFriendsPerYear); 
console.log(manFirstName + " avg number of friends made per year is " + manFriendsPerYear); 

console.log("The Womans full name is " + womanfirstName + " " + womanMiddleInitial + ", " + womnaLastName);
console.log("The Mans full name is " + manFirstName + " " + manMiddleInitial + ", " + manLastName);
