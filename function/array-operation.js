function sumOfNumber(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;

  }
  return sum;
}
const num = [34, 5, 76, 88, 32];
const sum = sumOfNumber(num);
console.log("Sum of number is", sum);
