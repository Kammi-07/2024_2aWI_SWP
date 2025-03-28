

let input = "000011110000"
let result = ""
function Invertbit(input) {
    let inputstring = String(input);
    for (let index = 0; index < inputstring.length; index++) {
        result += (inputstring[index] === "0" ? "1" : "0");


    }
    return result;
}
Invertbit(input);
console.log(result);
