function isLeapYear(year) {
  //   if (year % 4 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear = isLeapYear(1900);
console.log(leapYear);
