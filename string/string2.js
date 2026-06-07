// * reverse the string and check palindrome

str = "comment vas-tu ? je vais bien merci";
revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
console.log(`Reverse of ${str}  =  ${revStr}`);

// * finding a character from the string
let ch = "z";
let found = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] == ch) {
    console.log(`Character found at ${i} index`);
    found = true;
    break;
  }
}

if (found == false) {
  console.log("Element not found in the string ");
}

// * remove the spaces from the string using the loop and print output , a string which does not contains any spaces
data = " Hello World is here";
newData = "";

for (let i = 0; i < data.length; i++) {
  if (data[i] == " ") continue;
  newData += data[i];
}
console.log(newData);

// * find the longest sequence of characters in the string
/*
    input : This is to find the largest word in a string
    output : largest (index) 
*/

data =
  "The longest word in a standard English dictionary is pneumonoultramicroscopicsilicovolcanoconiosis  dd";
let longestWord = "";
let currentWord = "";

console.log(data.length);

for (let i = 0; i < data.length; i++) {
  if (data[i] != " ") {
    currentWord += data[i];
  } else {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    currentWord = "";
  }
}

console.log(longestWord);
