const product = [30, 15, 7, 80, 53, 55, 77, 89, 50, 48, 45];

let temp = [];
for (let i = 0; i < 89; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    temp.push(i);
  }
}

console.log(temp);
