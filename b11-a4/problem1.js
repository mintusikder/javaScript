function calculateVAT(amount) {
  if (typeof amount !== "number" || amount <= 0) {
    return "invalid";
  }
  const vat = amount * 0.075;
  return vat;
}
console.log(calculateVAT(-500))