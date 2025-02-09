const sentence = "I learned web development";

let revers = "";
for (let letter of sentence) {
//   console.log(letter);
  revers = letter + revers;
}
// console.log(revers);

let rev = "";
for (let i = 0; i < sentence.length; i++) {
//   console.log(i);
  const letter = sentence[i];
  rev = letter + rev;
}

console.log(rev);

//shotcart 

const reversed =  sentence.split("").reverse().join("")
