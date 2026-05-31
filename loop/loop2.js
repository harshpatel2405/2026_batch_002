let n = 12321;
let sum = 0;
let mul = 1;
let rev = 0;
let temp = n;
console.log("Number is " + n);

while (n > 0) {
  let ld = n % 10;
  sum += ld; //  sum = sum + ld
  mul *= ld;

  console.log(ld);

  rev = rev * 10 + ld;
  n = parseInt(n / 10);
}
console.log("Sum = " + sum);
console.log(`Multplication = ${mul}`);
console.log(`Reverse of ${temp} is ${rev}`);

if (rev == temp) {
  console.log(`${temp} is palindrome number`);
} else {
  console.log(`${temp} is not palindrome number`);
}

/*
    153 = 1^3+ 5^3 + 3^3 = 153
*/

n = 15;
temp = n;
let power = 0;

while (n > 0) {
  power++;
  n = parseInt(n / 10);
}

n = temp;
let arm = 0;
while (n > 0) {
  let ld = n % 10;
  let ans = Math.pow(ld, power);
  arm += ans;
  n = parseInt(n / 10);
}

if (arm == temp) {
  console.log("It is armstrong number");
} else {
  console.log("It is not armstrong number");
}
