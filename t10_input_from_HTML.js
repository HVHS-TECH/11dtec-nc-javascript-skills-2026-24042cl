/****************************
Name of task: Input From HTML
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables

/****************************
Main code
****************************/
function getFromInput(){
 const NAME_FIELD = document.getElementById("nameField");
 let userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Your name is "+userName+"</p>"
}
/****************************
Functions
****************************/
