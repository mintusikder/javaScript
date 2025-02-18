function validContact(contact) {
  if (typeof contact !== "string") {
    return "invalid";
  }
  if (
    contact.length === 11 &&
    contact.startsWith("01") &&
    /^\d+$/.test(contact)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validContact(true))
