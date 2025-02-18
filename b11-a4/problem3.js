function willSuccess(result) {
  if (!Array.isArray(result)) {
    return "invalid";
  }

  let pass = 0;
  let fail = 0;

  for (let mark of result) {
    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}
console.log(willSuccess("100 , 100"));
