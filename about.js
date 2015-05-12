window.onload = function () {
    document.getElementById("screen").style.height = (screen.height -
            document.querySelector("#drawer header").offsetHeight - 24) + "px";
}