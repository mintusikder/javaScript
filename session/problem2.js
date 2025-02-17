function findHena(list) {
  let temp = [];
  for (i = 0; i < list.length; i++) {
    const partiName = list[i];
    if (partiName.includes("h")) {
      temp.push(partiName);
    }
  }
  return temp;
}

const patriList = ["rohima", "sokina", "resma", "karisma", "hena"];

const newPatri = findHena(patriList);
console.log(newPatri)
