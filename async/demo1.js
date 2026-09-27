console.log("A");
console.log("B");
console.log("C");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 3000);

setTimeout(()=>{
    console.log("C");
}, 5000)

