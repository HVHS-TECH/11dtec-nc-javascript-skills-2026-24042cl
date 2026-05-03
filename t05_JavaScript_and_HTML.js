/****************************
Name of task: JavaScript and HTML
****************************/
console.log("Running t01_javascriptAndHtml.js")
console.log("hello boi");

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
const OUTPUT = document.getElementById("spaceForJavaSciptOutput")
OUTPUT.innerHTML = "<h2>Added by JavaScipt</h2>"
/****************************
Main code
****************************/

OUTPUT.innerHTML += ("<p>Hi " + Username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars,</p>");
OUTPUT.innerHTML += ("<p>You were born in " + birthYear +);
OUTPUT.innerHTML += ("<p>In 10 years you will be " + oldAge + " years old.</p>");
OUTPUT.innerHTML += ("<p>You have " + money + " dollars</p>");
OUTPUT.innerHTML += ("<p>You have spent half of your money, you now have " + halfMoney + " dollars left.</p>");
OUTPUT.innerHTML += ("<p>Then you get $3, now you have " + add3 + " dollars.</p>");


/****************************
Functions
****************************/