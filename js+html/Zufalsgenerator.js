function random(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);


    if (max <= min) {
        document.getElementById("result").innerHTML = "gieb gültige Zahlen ein";
        return;
    }
    document.getElementById("result").innerHTML = random;


}
function Generate() {

    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);


    random(min, max);

}
