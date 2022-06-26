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
