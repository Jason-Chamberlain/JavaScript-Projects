window.alert("Hello, World!");  //Opens alert box with string

document.write("Hello, World!<br>");  //Writes to the page

var x = "This is a string<br><br>";  //Declare variable and assign value
document.write(x);  //Writes variable's value to the page

var quoteOne = "\"No sir, I don\'t like it.\" -Mr. Horse<br><br>";  //Uses \ to include "" in string
document.write(quoteOne);

var concatString = "In a world of endless possibilities, human connection remains powerful. "  //Uses + to concatenate strings
    + "Regardless of backgrounds, we all seek love, understanding, and belonging.Through "
    + "digital platforms, we bridge gaps and create communities.Let's embrace empathy and "
    + "respect, celebrating our shared humanity. Together, we can build a future of kindness, "
    + "diversity, and unity.";
document.write(concatString);

var game = "7 Ages", playerCount = "2-7", playingTime = "480 min", classification = "Strategy"; //Declares and assigns values to multiple variables in one statement
document.write("<br><br>" + game + "<br><br>");

document.write(3 + 3);