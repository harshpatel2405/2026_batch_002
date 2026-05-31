/*
* * * *
* * * *
* * * *
* * * *
*/
for(let i = 1;i<=4;i++)
{
    let row =""
    for(let j  = 1;j<=4;j++)
    {
        row = row + "* "; // * concatenation
    }
    console.log(row)
}

/*
    *
   * *
  * * * 
 * * * *
* * * * *
*/
let n= 5
for(let i =1; i <= n;i++)
{
    let row =""
    for(let j = 1; j <= n-i;j++)
    {
        row += " "
    }

    for(let k = 1; k<= i;k++)
    {
        row += "* "
    } 
    console.log(row)
}