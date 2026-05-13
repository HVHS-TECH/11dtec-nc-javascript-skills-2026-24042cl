/****************************
Name of task: Input From HTML
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Functions
****************************/
function getFormInput(){
 const NAME_FIELD = document.getElementById("nameField");
 let userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Your name is "+userName+"</p>"
}