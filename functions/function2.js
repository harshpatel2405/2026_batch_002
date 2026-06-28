function one() {
  console.log("This statement is from function 'one'");
}

function Two() {
  one();
//   console.log("This statement is from function 'Two'");
}

Two();

// function calling inside another function

// * Check whether the number is prime and palindrome
let n = 11;

function checkPalindrome(number) {
  let rev = 0;
  let temp = number;
  while (number > 0) {
    let ld = number % 10;
    rev = rev * 10 + ld;
    number = parseInt(number / 10);
  }

  if (rev == temp) return true;
  else return false;
}

function checkPrime(number) {
  let i;
  3;
  let count = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }

  if (count == 2) return true;
  else return false;
}

function primePalindrome(num) {
  let prime = checkPrime(num);
  let palindrome = checkPalindrome(num);

  if (prime && palindrome) {
    console.log("The number is prime and palindrome");
  } else {
    console.log("The number is not prime and palindrome");
  }
}

primePalindrome(n);
