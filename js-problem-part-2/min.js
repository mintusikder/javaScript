const price = [300, 5666, 777, 4353, 1000, 4000, 60000, 12000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const chip = getMin(price);
console.log(chip);
