const hight = [44, 63, 54, 72, 45, 68, 98, 35];

function getHight(number) {
  let max = number[0];
  for (const num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const result = getHight(hight);
console.log("Max value is", result);
