// * global variables

a = 12
console.log(a)
document.write(`<h1>A : ${a} <h1>`)
b = 14
console.log(b)
document.write(b)

// * function scope -- accessible everywhere within function -- old version
// * can be updated

var c = 12.5
console.log("C : " + c)
document.write(c)
c = 45
console.log("C : " + c)
document.write(c)

// * Block scope -- let , const  -- accessible only within the allocated block - new version
// * let - can be updated
let d = true // boolean
console.log("D : " + d)
document.write(d)
d = "Harsh"
console.log("D : " + d)
document.write(d)

// * const - cannot be updated once value is assigned
const e = 'a';
console.log("E : " + e)
document.write(e)
