const disa = 45;
const salman = 55;

if (disa > salman) {
  console.log("Disa will get the ice");
} else {
  console.log("Salman will get the ice");
}

//inside a function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(33, 55);
console.log(max);
