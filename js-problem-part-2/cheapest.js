const mobile = [
  { name: "Samsung", price: 12000, camera: "12mp", color: "black" },
  { name: "Apple", price: 10000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 50000, camera: "12mp", color: "black" },
  { name: "Walton", price: 32000, camera: "12mp", color: "black" },
  { name: "Itle", price: 92000, camera: "12mp", color: "black" },
];

function getChipPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const chip = getChipPhone(mobile);
console.log(chip);
