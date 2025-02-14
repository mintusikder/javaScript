function oddAverage(numbers) {
  let odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      // console.log(num)
      odds.push(number);
    }
  }
    // return odds;
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum,count)
  const avg = sum / count;
  return avg;
}

const numbers = [22, 44, 66, 55, 77, 22];
const avg = oddAverage(numbers);
console.log("average numb", avg);
