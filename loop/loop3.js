// * check how many number are prime between 1 and 100
let i,j;

for(i = 1 ; i <= 100; i++)
{
    let n = i;
    let count = 0;

    for(j = 1; j <= n;j++)
    {
        if(n % j == 0)
        {
            count++;
        }
    }

    if(count == 2)
    {
        console.log(n)
    }
}