// * Higher order function
// ^ 1. where function is passed as an args
// ^ 2. function is returned from the function

// * callback function -- callback hell  CBH
const welcome = (func) => {
  func("harsh");
};

const greet = (name) => {
  console.log("Welcome to the website ", name);
};
welcome(greet);

// * function returns function
const multiply = (a) => {
  const abc = (b) => {
    return a * b;
  };
  return abc;
};

const ans1 = multiply(3);
console.log(ans1(15))
