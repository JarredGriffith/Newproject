let isHotOutside = true;
let isWeekday = true ;
let hasMoneyInPocket = true; 

let costOfMilk = 2.99;
let mopneyInWallet = 10;
let thirstLevel = 4;

let shouldByIceCream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
let willBuyMilk = isHotOutside && thirstLevel>=3 && mopneyInWallet>=(2*costOfMilk);

console.log("shouldByIceCream: " + shouldByIceCream);
console.log("willGoSwimming: " + willGoSwimming);
console.log("isAGoodDay: " + isAGoodDay);
console.log("willBuyMilk: " + willBuyMilk); 