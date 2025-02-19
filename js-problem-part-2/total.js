const product = [
  { name: "sampu", price: 200 },
  { name: "saban", price: 40 },
  { name: "alu", price: 600 },
  { name: "lobon", price: 100 },
];

function getTotal(products) {
   let total = 0
    for(const product of products){
       total = total + product.price
    }
    return total
}

const total = getTotal(product);
console.log("total shopping", total);
