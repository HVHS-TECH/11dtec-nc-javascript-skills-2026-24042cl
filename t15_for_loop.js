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

  const BOTTLE_FIELD = document.getElementById("bottleField");
  let bottles = parseInt(BOTTLE_FIELD.value) || 99;

  OUTPUT.innerHTML += `<p>${currentBottles} ${bottleWord} of milk on the wall, ${currentBottles} ${bottleWord} of milk.<br>`;
  OUTPUT.innerHTML += `Take one down, pass it around, ${nextBottles} ${nextBottleWord} of milk on the wall.</p><br><br>`;
}

container.innerHTML = output;




/****************************
Functions
****************************/