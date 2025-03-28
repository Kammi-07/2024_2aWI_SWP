/*

Du hast folgende Eingabe "1 2 3 4"
Line 2: n space-separated integer numbers x_1 .. x_n.
Output
sum of even numbers
Constraints
-100 <= x_i <= 100

Example
Input
1 2 3 4
Output
*/
//comenr 
/*more line comment


still a comment*/
let input = "1 2 3 4 5 6 7 8 9 10";
let numbers = input.split(" ");
console.log(numbers);

let evenSum = 0;
for (let index = 0; index < numbers.length; index++) {
    if (Number(numbers[index]) % 2 == 0) {
        evenSum = evenSum + Number(numbers[index]);
    }

}

console.log(evenSum);

/*code von chat gpt
let input = "1 2 3 4 5 6 7 8 9 10"
let numbers = input.split(" ").map(Number);
let evenSum = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
console.log(evenSum);*/
