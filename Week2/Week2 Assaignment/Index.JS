let isHotOutside = true;
let isWeekday = true ;
let hasMoneyInPocket = true; 

let costOfMilk = 2.99;
let mopneyInWallet = 10;
let thirstLevel = 4;

let shouldByIceCream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket;
let willBuyMilk = isHotOutside && mopneyInWallet>0;

console.log(shouldByIceCream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk); 
