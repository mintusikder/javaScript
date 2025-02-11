const person = ["Mintu", "Sajib", "Rakib", "Sakib", "Abid"];

const shortPerson = person.sort();
console.log(shortPerson);

const numbers = [5, 4, 23, 12, 3, 9, 1];
const asc_sort = numbers.sort(function (a, b) {
  return a - b;
});
const des_sort = numbers.sort(function (a, b) {
  return b - a;
});
console.log(asc_sort);
console.log(des_sort);
