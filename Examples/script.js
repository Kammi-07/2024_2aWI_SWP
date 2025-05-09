function calculateSum() {

    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;

    let result = Number(inputA) + Number(inputB);
    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}

function calculateSubtract() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) - Number(inputB);
    document.getElementById("result").innerHTML = result;
}

function calculateMultiply() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    let result = Number(inputA) * Number(inputB);
    document.getElementById("result").innerHTML = result;
}

function calculateDivide() {
    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;
    if (Number(inputB) === 0) {
        document.getElementById("result").innerHTML = "Fehler: ÷0";
    } else {
        let result = Number(inputA) / Number(inputB);
        document.getElementById("result").innerHTML = result;
    }
}