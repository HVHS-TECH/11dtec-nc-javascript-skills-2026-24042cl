/****************************
Name of task: For Loop
****************************/
console.log("Running t01_introduction.js")
console.log("hello boi");

//Variables


/****************************
Main code
****************************/
const container = document.getElementById("spaceForJavaScriptOutput");
let output = "";

for (let i = 99; i >= 0; i--) {
  let currentBottles = i === 0 ? "No more" : i;
  let nextBottles = i - 1 === 0 ? "no more" : (i - 1 < 0 ? 99 : i - 1);
  let bottleWord = i === 1 ? "bottle" : "bottles";
  let nextBottleWord = (i - 1) === 1 ? "bottle" : "bottles";

  if (i > 0) {
    output += `${currentBottles} ${bottleWord} of milk on the wall, ${currentBottles} ${bottleWord} of milk.<br>`;
    output += `Take one down, pass it around, ${nextBottles} ${nextBottleWord} of milk on the wall.<br><br>`;
  } else {
    output += `No more bottles of milk on the wall, no more bottles of milk.<br>`;
    output += `Go to the store and buy some more, 99 bottles of milk on the wall!`;
  }
}

container.innerHTML = output;




/****************************
Functions
****************************/