function chLength(str) {
  const st = str.length;
  console.log(str, st);

  if (st % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}
chLength("dhakas");

// function double or triple

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

function numberOfElement(number) {
  const num = number.length;
  return num;
}
numberOfElement([34, 65, 8, 90, 32, 24]);


