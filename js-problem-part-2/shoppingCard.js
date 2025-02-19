const product = [
  { name: "sampu", price: 200, quantity: 5 },
  { name: "saban", price: 40, quantity: 4 },
  { name: "alu", price: 600, quantity: 6 },
  { name: "lobon", price: 100, quantity: 2 },
];

function cardTotal(products) {
    let total = 0;
  for (const product of products) {
    const thisProductCast = product.price * product.quantity
    total = total + thisProductCast
  }
  return total
}

const allProduct = cardTotal(product);
console.log(allProduct);
