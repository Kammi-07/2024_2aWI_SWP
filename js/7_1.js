let input = prompt("Enter numbers:");
let numbers = input.split(" ").map(Number);
let evenSum = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
console.log(evenSum);
