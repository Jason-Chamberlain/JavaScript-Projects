function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 56) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote, Age_dif;
    Age = document.getElementById("Age").value;
    Age_dif = 18 - Age;
    Can_Vote = (Age_dif < 1) ? "You are eligible to vote" : "You are too young to vote. You will be eligible in " + Age_dif + " years."
    document.getElementById("Vote").innerHTML = Can_Vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Make +
        " " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year;
}

class Boardgame {
    constructor(title) {
        this.title = title;
        this.owned = true;
    }
}

function createBoardgame() {
    var title = "A Feast for Odin";
    var newBoardgame = new Boardgame(title);
    document.getElementById("New_and_This").innerHTML = "Title: "
        + newBoardgame.title + "<br>Owned: " + newBoardgame.owned;
}

function Addition() {
    var num1 = 17;
    var num2 = 17;
    
    function addNumbers(a, b) {
        return a + b;
    }

    document.getElementById("Nested_Function").innerHTML = addNumbers(num1, num2);
}