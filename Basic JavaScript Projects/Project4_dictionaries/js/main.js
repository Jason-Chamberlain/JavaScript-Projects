var boardgame1 = {
    Title: "A Feast for Odin",
    Release: "2016",
    Designer: "Uwe Rosenberg",
    Type: "Strategy",
    Weight: 3.86
};

function getDesigner() {
    document.getElementById("Dictionary").innerHTML = "The designer of " + boardgame1.Title + " is: " + boardgame1.Designer;
};

function deleteDesigner() {
    delete boardgame1.Designer;
    document.getElementById("DeleteDesigner").innerHTML = "The designer of " + boardgame1.Title + " has been deleted <br> The designer of " + boardgame1.Title + " is: " + boardgame1.Designer;
};