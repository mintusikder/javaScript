const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers)
// const revers = numbers.reverse()
// console.log(revers)
//-------------------------
const rev_number = [];
for (const nam of numbers) {
//   console.log(nam);
  rev_number.unshift(nam)
}
// console.log(rev_number)
//-----------------------
const revers_numbers = []

for(let i=0; i<rev_number.length ; i++){
    const num = numbers[i]
    revers_numbers.unshift(num)
}
// console.log(rev_number)

//revers side ------------------
const rev_rev_numbers = []
for(let i = numbers.length - 1 ; i>=0;i--){
    const num = numbers[i]
    // console.log(num)
    rev_rev_numbers.push(num)
}
// console.log(rev_rev_numbers)

const friends = ["Mintu", "Sajib", "Rakib", "Sakib"]; 
const rev = friends.reverse()
console.log(rev)