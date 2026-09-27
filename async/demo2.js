function getdata() {
  console.log("inside get data function");
}

// setInterval(getdata, 1000);


let count = 1;
let id = setInterval(counter, 1000)

function counter()
{
    if(count == 5)
    {
        clearInterval(id)
    }
    console.log(count)
    count++;
}

// * current time 
// * 2 hour stopwatch 