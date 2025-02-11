const product = ["laptop", "phone", "laptop", "phone", "watchfff"];

let bigName = product[0];
for (let i = 0; i < product.length; i++) {
  const element = product[i];

  if (element.length > bigName.length) {
    bigName = element;
  }
}

console.log(bigName);
