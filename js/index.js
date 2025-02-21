//1.keyword: let
//2. variable: resuld
//3. expression: 1 + 2
//4.zuweisung: =
//5. terminator: ;
// ===> statment: 1 + 2;
let result = 1 + 2; //3
//6.funktion console.log
//7.argument or parameter: result 
//8. terminator: ;
//==> statment: console.log(result);
console.log(result);
//codeblöcke: statments die zusammen gehören
{
    //1.keyword: let
    //2. variable: a
    //3.zuweisung: =
    //4. Konstante: 10
    //5. terminator: ;
    // ===> statment: 1 + 2;
    let a = 10;
    let b = 20;
    let c = a + b;
}
//operations
let a = 7;
let b = 3;
// addition
let sum = a + b;
//division
let differenz = a - b;
// addition
let produkt = a * b;
//division
let quotient = a / b;
//modulo (rest)
let remindor = a % b;
//exponentation(hochzahl)
let pwer = a ** b;
//expressions
let expressions = (a + b) * b;
// if else
if (a < b) {
    console.log("a is smaller than b");
    console.log("a: " + a);
    console.log("b: " + b);



} else {
    console.log("b is smaller than a")
}
// if else if else 
if (a < b) {
    console.log("a is smaller than b");
    console.log("a: " + a);
    console.log("b: " + b);



} else if (a > b) {
    console.log("b is smaller than b");
} else {
    console.log("a is equal to b");
}
//comparision operations
// equal to
console.log(1 == 1);// true
//not equal
console.log(1 != 1);//false
//greader than
console.log(1 > 1);//false
//greader or equal than
console.log(1 >= 1);//true
//smaller than
console.log(1 < 1);//false
//smaller oer equal than
console.log(1 <= 1);//true
//Values and typs
let intiger = 213;// Zahlen
let floatingPoint = 3.14567579457947;//kommas //dezimalstellen immer . kein komma
let boolean = true; //Wahrheitswert

//String
let String1 = "Hello World";
let String2 = "IT is grat";
let String3 = "It is gerat";
//verkettung
let String4 = String2 + "IT is grat" + String3;
console.log(String1);
console.log(String2);
console.log(String3);
console.log(String4);
//loops
//for loop
for (let i = 0; i < 10; i = i + 1) { //i kann so oft erstellt werden wie mann will aber kann außerhalb des for nicht aufgerufenn werden wenn es dafor nicht definiert wurde
    console.log("Hannes");


}
for (let i = 0; i < 10; i++) {
    console.log("Hannes");


}

//funktion
function sumforfunktion(n1, n2) {
    return n1 + n2

}
let n1 = 5;
let n2 = 10;
let resultsum = sumforfunktion(n1 + n2);
//funktion kx + d, k = 10 d = 5
function linearStraight(x) {
    return 10 * x + 5
}

function log(text, zahl) {
    for (let index = 0; index < zahl; index++) {
        console.log(text);


    }

} let hihihihihihihhh = "robin ist schwarz";
let sangöksbgksdbfkögbsd = 18;
log(hihihihihihihhh, sangöksbgksdbfkögbsd);