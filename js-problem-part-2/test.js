const product = [
    { name: "sampu", price: 200, quantity: 5 },
    { name: "saban", price: 40, quantity: 4 },
    { name: "alu", price: 600, quantity: 6 },
    { name: "lobon", price: 100, quantity: 2 },
  ];

  function getTotal(products){
    let total = 0
    for(const product of products){
        const totalPrice = product.price * product.quantity
        total = total +totalPrice
    }
    return total
  }
  const result = getTotal(product)
  console.log(result)