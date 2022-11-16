// Pythagorean theorem
let legAC = 'a';
let legBC = 'b';
let hypotenuseAB = `${legAC}2 + ${legBC}2`
console.log(`c2 = ${hypotenuseAB}`); // c2 = a2 + b2
// How much apples i can buy if i have 50 usd, apples cost 3 usd. and how much money i will have after
const ownMoney = 50;
const priceForKg = 3;
let moneyLeft = ownMoney%priceForKg;
let appleAmount = (ownMoney - moneyLeft) / priceForKg;
console.log(`Max amount of apple ${appleAmount} kg`); // Max amount of apple 16 kg
console.log(`left ${moneyLeft} usd`); // left 2 usd