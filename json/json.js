const user = {
  name: "Ram",
  age: 22,
  address: "Ayodhya",
  gender: "male",
};

console.log("User JSON ", user);

console.log("Name : " + user.name);
console.log("Age : " + user.age);
console.log("Gender : " + user.gender);
console.log("Address : " + user.address);

// make me a json for student with 6 fields and print sum of marks of three subjects
const student = {
  name: "Ketan",
  age: 14,
  marks: {
    maths: 45,
    science: 98,
    English: 10,
  },
  address: "XYZ Road",
  std: 8,
  division: "a",
};

console.log("Student JSon : ", student);
console.log("Marks : ", student.marks);
console.log("Maths : ", student.marks.maths);
console.log("Science : ", student.marks.science);
console.log("English : ", student.marks.English);

let sum = 0;
sum = student.marks.maths + student.marks.science + student.marks.English;
console.log("Addition : " + sum);

// * Task : make 3 employee json
// * make 5 fields ,
// * check which emloyee gets the highest salary , print the name of that employee
