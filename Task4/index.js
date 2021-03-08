function getNames() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return as an array
  return [firstName, lastName];
}

const [firstName, lastName] = getNames();

console.log(firstName + " " + lastName);
