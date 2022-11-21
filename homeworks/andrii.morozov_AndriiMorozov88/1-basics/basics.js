// Pythagorean theorem
const legAC = 'a';
const legBC = 'b';
const hypotenuseAB = `${legAC}2 + ${legBC}2`;
console.log(`c2 = ${hypotenuseAB}`); // c2 = a2 + b2
// How much apples i can buy if i have 50 usd, apples cost 3 usd. how much money i will have after
const ownMoney = 50;
const priceForKg = 3;
const moneyLeft = ownMoney % priceForKg;
const appleAmount = (ownMoney - moneyLeft) / priceForKg;
console.log(`Max amount of apple ${appleAmount} kg`); // Max amount of apple 16 kg
console.log(`left ${moneyLeft} usd`); // left 2 usd
