const mobile = {
  brand: "samsung",
  price: 2500,
  color: "black",
  camera: "48mp",
};


for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}

const keys = Object.keys(mobile)
console.log(keys)

for (const key of keys){
    console.log(key , mobile[key])
} 