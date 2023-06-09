function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var subtraction = 7 - 5;
    document.getElementById("Subtraction").innerHTML = "7 - 5 = " + subtraction;
}

function multiplication_function() {
    var multiplication = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 * 8 = " + multiplication;
}

function division_function() {
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + division;
}

function multiple_operators_function() {
    var multiple_operators = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Multiple_Operators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtract 5 equals " + multiple_operators;
}

function modulus_function() {
    var modulus = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negation_function() {
    var x = 10;
    document.getElementById("Negation").innerHTML = "The negative value of 10 is " + -x;
}

function increment_function() {
    var a = 5;
    document.getElementById("Increment").innerHTML = "The value of " + a + " incremented by 1 is " + ++a;
}

function decrement_function() {
    var b = 5;
    document.getElementById("Decrement").innerHTML = "The value of " + b + " decremented by 1 is " + --b;
}

function random_number_function() {
    var r = Math.random() * 100;
    document.getElementById("Random").innerHTML = "A random number between 1 and 100: " + Math.round(r);
}