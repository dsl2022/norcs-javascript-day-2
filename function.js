const nameOfFunction2 = () => {
  console.log("function expression");
};

function nameOfFunction() {
  console.log("function");
}

function add(num1, num2) {
  return num1 + num2;
}

const result = add(3, 4);
console.log({ result });

let user = {
  firstName: "Eli",
  lastName: "Hale",
};

function fullName({ firstName, lastName }) {
  console.log(firstName + " " + lastName);
}

fullName(user);
// ?

function add(a, b) {
  console.log(a + b);
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const house = "broken and old and ugly";

function buildHouse(house) {
  house = "pretty, fancy and functional";
  return house;
}

const result3 = subtract(add(1, 2), 1);
console.log(result3);
