document.getElementById("Red").style.backgroundColor = "red";
document.getElementById("Green").style.backgroundColor = "green";
document.getElementById("Yellow").style.backgroundColor = "yellow";
var a = document.getElementById("Red").style.backgroundColor;
var b = document.getElementById("Green").style.backgroundColor;
var c = document.getElementById("Yellow").style.backgroundColor;
function rotate_clockwise() {
    let temp = a
    a = c;
    c = b;
    b = temp;
    document.getElementById("Red").style.backgroundColor = a
    document.getElementById("Green").style.backgroundColor = b
    document.getElementById("Yellow").style.backgroundColor = c
}
function rotate_anticlockwise() {
    let temp = c
    c = a;
    a = b;
    b = temp;
    document.getElementById("Red").style.backgroundColor = a
    document.getElementById("Green").style.backgroundColor = b
    document.getElementById("Yellow").style.backgroundColor = c
}