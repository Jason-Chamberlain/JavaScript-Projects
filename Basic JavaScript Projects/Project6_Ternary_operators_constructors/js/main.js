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