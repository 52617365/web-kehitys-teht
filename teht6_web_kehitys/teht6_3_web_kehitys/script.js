var products = [
  {name: "milk", price: 1.10},
  {name: "coffee", price: 3.50},
  {name: "juice", price: 0.75},
  {name: "lemonade", price: 0.90},
  {name: "beer", price: 2.70},
  {name: "sour milk", price: 0.80}
];

products.forEach(product => {
  console.log(`${product.name}: ${product.price}€`);
});

console.log('\n')

products.sort((a, b) => a.price - b.price);

console.log('Lajiteltu lista hinnan mukaan:');
products.forEach(product => {
  console.log(`${product.name}: ${product.price}€`);
});

const productsUnder2Euros = products.filter(product => product.price < 2);

console.log('\n')
console.log('Tuotteet, joiden hinta on alle 2€:');
productsUnder2Euros.forEach(product => {
  console.log(`${product.name}: ${product.price}€`);
});
