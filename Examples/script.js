

function getValues() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    return [num1, num2];
}

function buttonClicked() {
    // alert("Calculate button clicked");
    console.log("Calculate button clicke");

}




function Addition() {
    let [num1, num2] = getValues();
    let result = num1 + num2;

    // alert("Addition:" + result);
    console.log("Addition:" + result);

}

function Subtraction() {
    let [num1, num2] = getValues();
    //  alert("Subtraction:" + result);
    console.log("Subtraction:" + result);

}

function Multiplication() {
    let [num1, num2] = getValues();
    let result = num1 * num2;
    console.log("Multiplication:" + result);
}

function Division() {
    let [num1, num2] = getValues();
    if (num2 !== 0) {
        let result = num1 / num2;
        // alert("Division:" + result);
        console.log("Division:" + result);

    } else {
        console.log("Division durch 0 ist nicht erlaubt!");
        // alert("Division durch 0 ist nicht erlaubt!");

    }
}
