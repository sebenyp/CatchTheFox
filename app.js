
var score = 0;

var time = 60;

function move() {
    var a = Math.round(Math.random() * (9) + 1) / 10;
    document.getElementById("fox").style.opacity = a;

    var y = Math.round(Math.random() * (document.getElementById("screen").clientHeight - 100) + 35);
    var x = Math.round(Math.random() * (document.getElementById("screen").offsetWidth - 50));
    document.getElementById("fox").style.top = y + "px";
    document.getElementById("fox").style.left = x + "px";
    time--;
    if (time > 0) {
        setTimeout(move, 1000);
    }
    getInfo();
}

window.onload = function () {
    score = 0;
    time = 60;

    document.getElementById("screen").style.backgroundImage = "url('background.png')"
    document.getElementById("screen").style.height = (screen.height -
            document.querySelector("#drawer header").offsetHeight - 24) + "px";
    document.getElementById("fox").addEventListener("click", function () {
        if (time > 0) {
            score++;
            getInfo();
        }
    });
    move();
};

function getInfo() {
    document.getElementById("info").innerHTML = "Time: " + time + " Score: " + score;
}