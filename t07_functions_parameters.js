/****************************
Name of task: Functions Parameters
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables
let Username = "charles";
let year = "2026";
let age = 16;
let money = 67
let birthYear;
let oldAge;
oldAge = age + 10;
birthYear = year - age;
halfMoney = money / 2;
add3 = money / 2 + 3;

/****************************
Main code
****************************/
writeLine()
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript.</h2>";
OUTPUT.innerHTML += "<p>Hi " + Username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars,</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear +"</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + " years old.</p>";
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
OUTPUT.innerHTML += "<p>You have spent half of your money, you now have " + halfMoney + " dollars left.</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + add3 + " dollars.</p>";
displayWelcome("charles");


/****************************
Functions
****************************/
function writeLine(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    // add a line on the html page
    OUTPUT.innerHTML += "<p>Less code matters</p>"
}
function displayWelcome(_name){
    OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
}
function displayWelcome(_name, _age){
    OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
    OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}