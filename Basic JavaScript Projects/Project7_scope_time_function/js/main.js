var x = 2;

function localVar() {
    var y = 12;
    console.log(x + y);
}

function localErr() {
    console.log(x + y);
}

localVar();

function greeting_function() {
    var greeting;
    var hour = new Date().getHours();
    if (hour < 12) {
        greeting = "Good Morning!";
    }
    else {
        greeting = "Good Afternoon!";
    }
    document.getElementById("Greeting").innerHTML = greeting;
}

if (x > 5) {
    document.write("<p>x is greater than 5</p>");
}
else {
    document.write("<p>x is smaller than 5</p>");
}

function check_sign() {
    var num = document.getElementById("Input").value;
    var msg;
    if (num.length <= 0 || isNaN(num)) {
        msg = "Please enter a valid number";
    }
    else if (num == 0) {
        msg = "Pick a number other than Zero";
    }
    else if (num < 0) {
        msg = "Your number was negative.";
    }
    else {
        msg = "Your number was positive";
    }
    document.getElementById("Result").innerHTML = msg;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the Morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the Afternoon";
    }
    else {
        Reply = "It is the Evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}