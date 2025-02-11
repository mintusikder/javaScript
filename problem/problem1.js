const product = ["laptop","phone","laptop","phone","watch"]



const uniqueProduct = []
for(let i = 0; i<product.length; i++){
    const element = product[i]

    if(!uniqueProduct.includes(element)){
        uniqueProduct.push(element)
    }
}
console.log(uniqueProduct)