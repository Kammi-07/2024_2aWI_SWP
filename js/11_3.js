let input = "5 1 -2 -8 4 5";
let numbers = input.split(" ").map(Number);
let Betragnumbers = numbers.map(Betrag);
console.log(numbers);
console.log(Betragnumbers);


function Betrag(zahl) {
    if (zahl < 0) {
        return zahl * -1;
    } else if (zahl >= 0) {
        return zahl;
    }
}
console.log(Betrag(-1) + " " + Betrag(4) + " " + Betrag(-16) + " " + Betrag(0));
function nearerby0(betragnumber, numbers) {
    let neareestnumber = 0;
    let neareestnumberarray = 0;
    for (let index = 0; index < Betragnumbers.length; index++) {
        if (betragnumber[index] < betragnumber[index - 1]) {
            neareestnumber = numbers[index]
            neareestnumberarray = index;
        } else if (condition) {

        }
    }

}