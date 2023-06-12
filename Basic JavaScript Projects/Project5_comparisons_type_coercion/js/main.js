document.write(typeof "Word");
document.write("<br>" + 5 + "four<br>");

function NaN_Function() {
    document.getElementById("Test").innerHTML = "Zero divided by Zero is: " + 0 / 0;
};

function NaN_True() {
    document.getElementById("NaN_True").innerHTML = "'Ten' is NaN: " + isNaN('Ten');
};

function NaN_False() {
    document.getElementById("NaN_False").innerHTML = "'10' is NaN: " + isNaN('10');
};

document.write(2E310 + "<br>");
document.write(-2E310 + "<br>");
document.write((10 > 2) + "<br>");
document.write((10 < 2) + "<br>");

console.log(10 * 77);
console.log(10 < 2);

document.write((10 == 10) + "<br>");
document.write((10 == 2) + "<br>");

document.write((10 === 10) + "<br>");
document.write((10 === "2") + "<br>");
document.write((10 === "10") + "<br>");
document.write(("10" === "2") + "<br>");

document.write((5 < 10 && 10 < 20) + "<br>");
document.write((5 > 10 && 10 < 20) + "<br>");

function not_Function1() {
    document.getElementById("Not1").innerHTML = "The equation !(20 < 10) returns the value of: " + !(20 < 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = "The equation !(20 > 10) returns the value of: " + !(20 > 10);
}