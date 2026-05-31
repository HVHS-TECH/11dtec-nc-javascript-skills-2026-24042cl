/****************************
Name of task: Arrays continued
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables
 let userName
 let age
 let money
 let change
let shoppingList = [];
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

 if (money > 4){
    OUTPUT.innerHTML += "<p>a chocolate bar costs $4.</p>"
 }else{
    OUTPUT.innerHTML += "<p>you CAN'T afford a chocolate bar.</p>"
 }
 
if (money < 4){
    OUTPUT.innerHTML += "<p>a chocolate bar costs $4.</p>"
}else{
    OUTPUT.innerHTML += "<p>you CAN afford a chocolate bar.</p>"
}
const CHANGE_FIELD = document.getElementById("changeField");
 change = money - 4;
 CHANGE_FIELD.value = change;
 OUTPUT.innerHTML += "<p>Your change is $"+change+"</p>"

 const CHOCOLATE_FIELD = document.getElementById("chocolateField");
 
 let shoppingList = ["Chocolate", "Chips", "Drink"];

 let choice = SHOPPING_FIELD.value;

 OUTPUT.innerHTML += "<p>"+shoppingList[choice]+"</p>"
 for(let i=0; i<shoppingList.length; i++){
    OUTPUT.innerHTML += "<p>Item " + i + ": "+shoppingList[i]+"</p>"
 }
 function addItem(){
    const ITEM_FIELD = document.getElementById("itemField");
    shopping List.push(ITEM_FIELD.value);

    OUTPUT.innerHTML += "<p>Added "+ITEM_FIELD.value+" to the shopping list.</p>"
    document.getElementById("itemField").value = "";
    
 }
function showList(){
    OUTPUT.innerHTML += "<p>Shopping List:</p>";

    for(let i=0; i<shoppingList.length; i++){
        OUTPUT.innerHTML += "<p>Item " + i + ": "+shoppingList[i]+"</p>"
    }
 
 const CHOCOLATE_FIELD = document.getElementById("chocolateField");
 let chocolateRating = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];

 let choice = CHOCOLATE_FIELD.value;

 OUTPUT.innerHTML += "<p>"+chocolateRating[choice]+"</p>"
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

}
