function random(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1));
    if (max <= min) {
        document.getElementById("scores").innerHTML = "gieb gültige Zahlen ein";
        return;
    }
    else {


    }
}

const min = Number(document.getElementById("min"));
const max = Number(document.getElementById("max"));