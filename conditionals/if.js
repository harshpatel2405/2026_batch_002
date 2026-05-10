let age = 19;

if (age > 18)
    console.log("You can vote")

let num = parseInt(45.56);
console.log(num)
if (num > 0)
    console.log("Number is positive. ")

// ^ Task : Enter a character. If it is a digit (0–9), print "It is a digit"  

/*
^   13) Input weight(in kg) and height(in meters) → calculate BMI and classify:
^   	BMI = weight / (height * height)
^   		BMI < 18.5 → Underweight
^   		18.5–24.9 → Normal
^   		25–29.9 → Overweight
^   		30+ → Obese
*/

/*
*   Even/Odd & Divisibility		
*   Ask a number:
*   	If number is even
*   		Check if it's divisible by 4
*   	Else
*   	Check if it's divisible by 3
*/
let n = parseInt(prompt("Enter a number"))

if (n % 2 == 0) {
    if (n % 4 == 0) {
        console.log("Divisible by 2 and 4")
    }
    else {
        console.log("Divisible by 2 not by 4")
    }
}
else {
    if (n % 3 == 0) {
        console.log("Odd and divisible by 3")
    }
    else {
        console.log("odd and not divisible by 3")
    }
}

/*
^     Employee Salary Slip Simulation	
    * Input:
^     	Basic Salary
^     	If salary > 20000
^     		HRA = 25%, DA = 90%
^     	Else
^     		HRA = 20%, DA = 80%
^     	Calculate and print Gross Salary
*/

let basicSalary = parseInt(prompt("Enter your basic salary"));

let hra;
let da;

if (basicSalary > 20000) {
    hra = 0.25 * basicSalary
    da = 0.9 * basicSalary
}
else {
    hra = 0.2 * basicSalary
    da = 0.8 * basicSalary
}

let grossSalary = basicSalary + hra + da;

console.log("Gross Salary : " + grossSalary)