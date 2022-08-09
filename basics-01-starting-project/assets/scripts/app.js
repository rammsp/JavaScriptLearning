// alert('This Works!!!');

function add(num1, num2) {
    const result = num1 + num2;
    alert('Reuslt is ' + result);
}

add(1, 2);
add(3, 4);

let displayResult
function addition() {

}

let currentResult;
currentResult = 0;
const initialValue = 0;
currentResult = currentResult + 1 + 10 * 3;
// let calculationDescription = currentResult + ' = ' + initialValue + ' + 1 + 10 * 3';
let calculationDescription = `${currentResult}` + ' = ' + initialValue + '\n + 1 + 10 * 3';
//Uses method from vendor.js
outputResult(currentResult, calculationDescription);

let logEntries = [];


let finalResult = 100;
function addition() {
    let initialValue = parseInt(finalResult);
    finalResult =  initialValue + parseInt(userInput.value);
    let logEntry = {
        action: 'ADDITION',
        initValue: initialValue,
        input: userInput.value,
        finResult: finalResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
    outputResult(finalResult, `100 + ${userInput.value}`);
}

addBtn.addEventListener('click', addition);