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
  function getFormInput(){
    let bottles = parseInt(document.getElementById("bottleField").value);
    let song = "";

    for (let i = bottles; i > 0; i--){
      if (i > 1) {
        song += i + " bottles of milk on the wall! " + i + " bottles of milk! ";
        song += "Take one down, pass it around... " + (i-1) + " bottles of milk on the wall!\n";
      } else {
        song += "1 bottle of milk on the wall! 1 bottle of milk!";
        song += "Take one down, pass it around... No more bottles of milk on the wall!\n";
      }
    }
    song += "No more bottles of milk on the wall! No more bottles of milk! Go to the store and buy some more... " + bottles + " bottles of milk on the wall!";
    container.innerHTML = "<pre>" + song + "</pre>";
  }


/****************************
Functions
****************************/