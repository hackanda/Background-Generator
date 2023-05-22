var inp1 = document.getElementById("colorinp1");
var inp2 = document.getElementById("colorinp2");
var h1 = document.getElementById("heading");
var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
var css = document.getElementById("css");

function changeBackGroundLeft(event) {
    body.style.background = "linear-gradient(to right"
    + ", "
    + inp1.value 
    + ", " 
    + inp2.value;

    css.innerText = body.style.background + ";";
}

function changeBackGroundRight(event) {
    body.style.background = "linear-gradient(to right"
    + ", " 
    + inp1.value 
    + ", " 
    + inp2.value;

    css.innerText = body.style.background + ";";
}

inp1.addEventListener("input", changeBackGroundLeft);
inp2.addEventListener("input", changeBackGroundRight);
body.addEventListener("mouseover", function () {

    let ranColor = Math.floor(Math.random()*16777215).toString(16);
    h1.style.color = "#" + ranColor;
})
