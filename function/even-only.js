function evenOnly(number) {
  console.log(number);
  let even = [];
  for (const num of number) {
    if (num % 2 === 0) {
      console.log(num);
      even.push(num);
    }
  }
  return even;
}

const number = [22, 43, 66, 7];
const evenNum = evenOnly(number);
console.log("Even number is",evenNum);
