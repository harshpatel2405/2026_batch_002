// * getElementById

let heading = document.getElementById("para");
heading.innerText = "This is modified with the help of DOM Manipulation";

// * getElementBytagname
let heading3 = document.getElementsByTagName("h3");
// console.log(heading3)
for (let i = 0; i < heading3.length; i++) {
  heading3[i].innerText = "This is heading 3 after dom manipulation " + i;
}

// * getElementbyClassName
let bold3 = document.getElementsByClassName("bo");
for(let i in bold3)
{
    bold3[i].innerText = "This is bold tag after dom manipulation " + i;
}
