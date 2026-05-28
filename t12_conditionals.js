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
displayWelcome(4 , 3 , 2.50);
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
 displayWelcome(4 , 3 , 2.50);
}
function displayWelcome(chocolate, chips, drink){
    OUTPUT.innerHTML += "<p>Chocolate bar: $"+ chocolate +"</p>";
    OUTPUT.innerHTML += "<p>Chips: $"+ chips +" </p>";
    OUTPUT.innerHTML += "<p>Drink: $"+ drink +" </p>";


 if (age < 20){
    console.log("prolly too young yo")
}
if (age > 20){
    console.log("unc")
}
if (age == 20){
    console.log("this is good")
}
if (money < 4){
    OUTPUT.innerHTML = "broke"
} 
if (money > 4){
    OUTPUT.innerHTML = "a chocolatebar costs $4. you have "+money+""
}else{
    OUTPUT.innerHTML = "you CAN afford a chocolate bar"
}

}
