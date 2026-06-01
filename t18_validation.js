/****************************
Name of task: Validation
****************************/
console.log("Running t01_javascriptAndHtml.js");

// Variables
let userName;
let age;
let money;
let change;
let shoppingCart = [];

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

displayWelcome(4, 3, 2.50);

/****************************
Functions
****************************/

function getFormInput() {

    OUTPUT.innerHTML = "";

    // NAME
    const NAME_FIELD = document.getElementById("nameField");

    if (NAME_FIELD.checkValidity() === false) {
        OUTPUT.innerHTML = "Please fill out the form correctly.";
        return;
    }

    userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + "</p>";

    // AGE
    const AGE_FIELD = document.getElementById("ageField");

    if (AGE_FIELD.checkValidity() === false) {
        OUTPUT.innerHTML += "<p>Please enter a valid age.</p>";
        return;
    }

    age = Number(AGE_FIELD.value);

    if (age < 0) {
        OUTPUT.innerHTML += "<p>How are you alive??</p>";
    } else if (age > 100) {
        OUTPUT.innerHTML += "<p>You are probably not alive anymore??</p>";
    } else if (age === 0) {
        OUTPUT.innerHTML += "<p>You are a newborn??</p>";
    } else if (age === 100) {
        OUTPUT.innerHTML += "<p>Congrats on being alive for a century!!</p>";
    }

    OUTPUT.innerHTML += "<p>You are " + age + " years old.</p>";

    // MONEY
    const MONEY_FIELD = document.getElementById("moneyField");

    if (MONEY_FIELD.checkValidity() === false) {
        OUTPUT.innerHTML += "<p>Please enter a valid amount of money.</p>";
        return;
    }

    money = Number(MONEY_FIELD.value);

    if (money < 0) {
        OUTPUT.innerHTML += "<p>You can't have negative money!!</p>";
    } else if (money > 1000) {
        OUTPUT.innerHTML += "<p>You are a millionaire!!</p>";
    } else if (money === 0) {
        OUTPUT.innerHTML += "<p>You are broke!!</p>";
    } else if (money === 1000) {
        OUTPUT.innerHTML += "<p>Congrats on being a millionaire!!</p>";
    }

    OUTPUT.innerHTML += "<p>You have $" + money + ".</p>";

    // SHOP DISPLAY
    displayWelcome(4, 3, 2.50);

    OUTPUT.innerHTML += "<p>A chocolate bar costs $4.</p>";

    if (money >= 4) {
        OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar.</p>";
    } else {
        OUTPUT.innerHTML += "<p>You CAN'T afford a chocolate bar.</p>";
    }

    // CHANGE
    const CHANGE_FIELD = document.getElementById("changeField");

    change = money - 4;
    CHANGE_FIELD.value = change;

    OUTPUT.innerHTML += "<p>Your change is $" + change + "</p>";

    // CHOCOLATE RATING
    const CHOCOLATE_FIELD = document.getElementById("chocolateField");

    let chocolateRating = [
        "You loathe chocolate",
        "Chocolate is meh",
        "Chocolate is pretty good",
        "Chocolate is the best thing EVER!!!!"
    ];

    let choice = Number(CHOCOLATE_FIELD.value);

    if (choice >= 0 && choice < chocolateRating.length) {
        OUTPUT.innerHTML += "<p>" + chocolateRating[choice] + "</p>";
    }

    // AGE CONSOLE MESSAGES
    if (age < 20) {
        console.log("prolly too young yo");
    } else if (age > 20) {
        console.log("unc");
    } else {
        console.log("this is good");
    }
}

function displayWelcome(chocolate, chips, drink) {
    OUTPUT.innerHTML += "<p>Chocolate bar: $" + chocolate + "</p>";
    OUTPUT.innerHTML += "<p>Chips: $" + chips + "</p>";
    OUTPUT.innerHTML += "<p>Drink: $" + drink + "</p>";
}

function addChocolate() {
    shoppingCart.push("Chocolate");
    OUTPUT.innerHTML += "Added chocolate<br>";
}

function addChips() {
    shoppingCart.push("Chips");
    OUTPUT.innerHTML += "Added chips<br>";
}

function addDrink() {
    shoppingCart.push("Drink");
    OUTPUT.innerHTML += "Added drink<br>";
}

function showCart() {

    OUTPUT.innerHTML += "<br><strong>Cart Contents:</strong><br>";

    if (shoppingCart.length === 0) {
        OUTPUT.innerHTML += "Cart is empty.<br>";
        return;
    }

    for (let i = 0; i < shoppingCart.length; i++) {
        OUTPUT.innerHTML += shoppingCart[i] + "<br>";
    }
}