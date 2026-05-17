/*
1. print 1 to n 
2. sum of 1 to n 
3. even_odd_print
4. even_odd_sum
5. multiplication of 1 to n 
6. multiplication table of 1 to n 
* 7. exponent code 
8. factorial
9. average of 1 to n 
*/

// * 7 . exponent   5 ^ 3 = 125
/*
*  5 * 5 * 5 = 125
* 1 * 5 = 5
* 5 * 5 = 25
* 25 * 5 = 125

*/

let base = 5;
let power = 3;
let ans = 1;

for (let i = 1; i <= power; i++) {
    // console.log("ans = ", ans, " * ", base, " = ", ans * base)
    ans = ans * base;
}

console.log(base, " ^ ", power, " = ", ans)