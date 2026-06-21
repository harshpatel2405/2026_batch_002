// * wihout return without args
function add() {
  let a = 15;
  let b = 45;
  console.log(`Addition of ${a} and ${b} is ${a + b}`);
}

add();

// * wihout return with args
function subtract(a, b) {
  console.log(`Subtraction of ${a} and ${b} is ${a - b}`);
}

subtract(25, 4);

// * with return type without args
function multiply() {
  let a = 15;
  let b = 7;
  return a * b;
}

console.log(`Multiplication of 15 and 7 is ${multiply()}`);

// * with return type and with args
function divide(a, b) {
  return a / b;
}
console.log(`Division of 12 and 7 is ${divide(12, 7)}`);

// * nested functions, recursion (function calls itself)

// * function expression
let addition = function () {
  console.log("Function called through function expression");
};

addition();

// * arrow function  -- fast
const counter = () => {
  console.log("Function called through arrow function");
};
counter();

// * default params
function greet(name = "User") {
  console.log("Hello , " + name);
}
greet("Harsh");

function welcome( age,name = "User") {
  console.log(name + "\t" + age);
}
welcome(name = "Vasu",age = 45)
