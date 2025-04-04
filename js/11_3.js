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
    let nearestNumber = numbers[0];
    let nearestBetrag = betragnumber[0];

    for (let index = 1; index < betragnumber.length; index++) {
        if (betragnumber[index] < nearestBetrag) {
            nearestBetrag = betragnumber[index];
            nearestNumber = numbers[index];
        } else if (betragnumber[index] === nearestBetrag) {
            if (numbers[index] > nearestNumber) {
                nearestNumber = numbers[index];
            }
        }
    }

    return nearestNumber;
}
console.log(nearerby0(Betragnumbers, numbers));
