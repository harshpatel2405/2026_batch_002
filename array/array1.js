// let fruits = ["Apple","Mango","Banana",45,true, 78.98]
// console.log(fruits)
let num = [10, 20, 30, 40, 50];

// * complete array printing
console.log(num);

// * index printing
console.log(num[0], num[1], num[2], num[3], num[4]);

// * update
num[2] = 56;
console.log(num);

// * length  -- returns the size of array
let lengthOfArray = num.length;
console.log("Length of num is " + lengthOfArray)

// * traverse in array  -- for loop  -- returns index
for(let i = 0; i < lengthOfArray;i++)
{
    console.log(num[i])
}

// * for of -- returns element
for(let a of num)
{
    console.log(a)
}