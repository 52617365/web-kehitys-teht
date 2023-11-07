const products = ["milk", "Coffee", "juice", "lemonade", "beer", "Sour milk"];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

products.forEach(product => {
  console.log(product);
});

products.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(products);
