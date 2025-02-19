function multiply(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number" ){
        return "please provide a valid number"
    }
    const multiply = num1 * num2 
    return multiply
}

const result = multiply("ff", 5)
console.log(result)