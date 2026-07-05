// * Adding elements in array

let arr = [10, 20, 30, 40, 50];
console.log(arr);

// ^ 1. push -- add element at the end of the array
arr.push(60);
console.log(arr);

// ^ 2. unshift -- add element at the beginning of the array
arr.unshift(5);
console.log(arr);

// * Remove element

// ^ 1. pop -- removes from end
arr.pop();
console.log(arr);

// ^ 2. shift -- removes from starting
arr.shift();
console.log(arr);

// * adding , removing , updating element -- splice

let num = [11, 12, 13, 14, 15];
console.log(num)

// * removes all element from 0 (including 0)
// num.splice(0)
// console.log(num)

// * starting from 0 and 1 element after it
// num.splice(0,1)
// console.log(num)

// * replacing
// num.splice(1,1,78)
// console.log(num)

// * replacing
num.splice(1,1,78,89,45)
console.log(num)

// * adding
num.splice(2,0,111)
console.log(num)
