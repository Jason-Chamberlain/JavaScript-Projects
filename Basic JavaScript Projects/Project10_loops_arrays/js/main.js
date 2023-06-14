function while_loop() {
    var digit = "";
    var num = 1;

    while (num < 6) {
        digit += num + "<br>";
        num++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function Get_Length() {
    let text = document.getElementById("input").value;
    let length = text.length;

    document.getElementById("length").innerHTML = "Your string is " + length + " characters long.";
}

function for_loop() {
    var instruments = ["Violin", "Trumpet", "Cello", "Flute", "Timpani"];
    var content = "";
    var i;
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("instruments").innerHTML = content;
}

function array_function() {
    var boardgames = ["A Feast for Odin", "Anachrony", "Tapestry"];
    document.getElementById("array").innerHTML = boardgames[0];
}

const bgame = { title: "A Feast for o", year: "2016", age: "12+", weight: 3.86 }

function const_function() {
    document.getElementById("constant").innerHTML = bgame.title;
    bgame.title = "A Feast for Odin";
    bgame.type = "Strategy";
    document.getElementById("constant").innerHTML = bgame.title + ": " + bgame.type;
}

function get_PI() {
    function return_PI() {
        return Math.PI;
    }
    document.getElementById("pi_answer").innerHTML = return_PI();
}

let bg = {
    title: "A Feast for Odin",
    year: "2016",
    age: "12+",
    weight: 3.86,
    type: "Strategy",
    desc: function () {
        return this.title + ", released in " + this.year + ", is appropriate for players age "
            + this.age + ".<br>It is a " + this.type + " game and is rated "
            + this.weight + " on a complexity scale from 0 - 5.";
    }
}

function get_bg() {
    document.getElementById("bg_info").innerHTML = bg.desc();
}

function break_loop() {
    var digit = "";
    var num = 1;

    while (num < 11) {
        let breakNum = document.getElementById("num_input").value;
        if (num > breakNum) { break; }
        digit += num + "<br>";
        num++;
    }
    document.getElementById("break_output").innerHTML = digit;
}

function continue_loop() {
    var digit2 = "";
    var num2 = 0;

    while (num2 < 11) {
        num2++;
        let skipNum = document.getElementById("num_input2").value;
        if (num2 == skipNum) { continue; }
        digit2 += num2 + "<br>";
        
    }
    document.getElementById("continue_output").innerHTML = digit2;
}