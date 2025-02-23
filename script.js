let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number.toString();
    display.value = currentInput;
}

// Function to set the current operation (+, -, *, /)
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to calculate the result based on the operation
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    display.value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '';
}
