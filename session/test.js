function calculateVAT(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid";
    }
    const vat = amount * 0.075;
    return vat;
}

console.log(calculateVAT(1500));
console.log(calculateVAT(200));
console.log(calculateVAT(999));
console.log(calculateVAT("abc"));

//-----------------------------------------

// function validContact(contact) {
//   if (typeof contact !== "string") {
//     return "Invalid";
//   }
//   if (
//     contact.length === 11 &&
//     contact.startsWith("01") &&
//     /^\d+$/.test(contact)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validContact("01819234567")); 
// console.log(validContact("0181923 4567")); 
// console.log(validContact("018192345679")); 
// console.log(validContact["01987654321"]); 
// console.log(validContact("01345678900")); 
// console.log(validContact(true));
// console.log(validContact("02145678900")); 


//----------------------------------------


function willSuccess(results) {
    if (!Array.isArray(results)) {
        return "Invalid";
    }
    let passCount = 0;
    let failCount = 0;
    for (let mark of results) {
        if (mark >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    }
    if (passCount > failCount) {
        return true;
    } else {
        return false;
    }
}

console.log(willSuccess([60, 70, 80, 40, 30])); 
console.log(willSuccess([48 , 48 , 92 , 100 ]));         
console.log(willSuccess([48, 48, 50, 50, 100]));            
console.log(willSuccess("not an array"));                 
console.log(willSuccess([]));                 
console.log(willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ])); 
console.log(willSuccess("100 , 100")); 
console.log(willSuccess(90 )); 