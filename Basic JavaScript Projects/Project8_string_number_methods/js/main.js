function clickMe() {
    var part_1 = "This is a ";
    var part_2 = "concatenated ";
    var part_3 = "sentance.";
    var whole_sentance = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentance;
}

function slice_method() {
    var sentance = document.getElementById("Slice").textContent;
    var upperSentance = sentance.toUpperCase();
    document.getElementById("Slice").innerHTML = sentance + "<br>" + upperSentance;
    var selection = sentance.slice(16, 19);
    document.getElementById("Slice_Result").innerHTML = "Original slice(16,19): "
        + selection + "<br>Updated slice(16,19): " + selection.toUpperCase();
    document.getElementById("Search_Result").innerHTML = sentance.search("jumps");
}

function to_string() {
    var x = 1717;
    document.getElementById("toString_Method").innerHTML = x.toString();
}

function precision_Method() {
    var number = 1234.567890123456789;
    document.getElementById("Precision").innerHTML = number.toPrecision(8).toString();
}

function toFixed_Method() {
    var num1 = 17.1712345;
    document.getElementById("ToFixed").innerHTML = num1.toFixed(2);
}

function valueOf_Method() {
    var string1 = "This is a string";
    document.getElementById("ValueOf").innerHTML = string1.valueOf();
}
