//Wo ich aufgabe 6 gemacht habe war sie die gleiche wie Aufgabe 5 darum auch der selbe code
let input = "1,2,3,4,5,6,7,8,9,10,11,12";
console.log(calculate(input));
calculate(input);

function calculate(numbers) {
    let num = numbers.split(",").map(Number);
    let even = 0;
    let uneven = 0;
    for (let index = 0; index < num.length; index++) {
        if (num[index] % 2 === 0) {
            even += num[index];
        } else if (num[index] % 2 === 1) {
            uneven += num[index];

        }
    }
    let result = even / uneven;
    return result;
}