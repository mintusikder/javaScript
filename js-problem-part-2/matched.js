const number = [12, 44, 56, 65];

for (const num of number) {
  // console.log(num)
}

const products = [
  { id: 1, name: "apple phone", price: 50000 },
  { id: 2, name: "walton", price: 9000 },
  { id: 3, name: "sony phone", price: 400000 },
  { id: 4, name: "java phone", price: 300000 },
  { id: 5, name: "samsung", price: 600000 },
  { id: 6, name: "reno", price: 800000 },
  { id: 7, name: "watch", price: 900000 },
  { id: 8, name: "mack Phone", price: 200000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchProduct(products, search) {
  let match = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}

const result = matchProduct(products, "phone");
console.log(result);
