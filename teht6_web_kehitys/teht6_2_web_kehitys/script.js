const prices_alv0 = [20, 25, 30, 50, 100, 75, 25];

const alvRate = 0.24;
const prices_alv24 = prices_alv0.map(price => price * (1 + alvRate));

console.log(prices_alv24);

const totalPrice_alv0 = prices_alv0.reduce((accumulator, current) => accumulator + current, 0);
const totalPrice_alv24 = prices_alv24.reduce((accumulator, current) => accumulator + current, 0);

console.log(`Yhteensä ilman ALV: ${totalPrice_alv0} euroa`);
console.log(`Yhteensä ALV 24% kanssa: ${totalPrice_alv24} euroa`);
