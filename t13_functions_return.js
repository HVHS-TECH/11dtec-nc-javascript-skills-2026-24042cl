/****************************
Name of task: Conditions
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables
 let userName
 let age
 let money 

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Functions
****************************/
function getFormInput(){
 const NAME_FIELD = document.getElementById("nameField");
userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Your name is "+userName+"</p>"
 
 const AGE_FIELD = document.getElementById("ageField");
age = AGE_FIELD.value;
 OUTPUT.innerHTML += "<p> You are "+age+" years old"+"</p>"
 
 const MONEY_FIELD = document.getElementById("moneyField");
money = MONEY_FIELD.value;
 OUTPUT.innerHTML += "<p> You have "+money+" dollars"+"</p>"
 if (age < 20){
    console.log("prolly too young yo")
}
if (age > 20){
    console.log("unc")
}
if (age == 20){
    console.log("this is good")
}
}
