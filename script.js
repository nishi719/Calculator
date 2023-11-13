let display = document.getElementById("display");
let operators = ['+', '-', '*', '/'];
let currentInput = '';
let currentOperator = '';

// Function to handle number button clicks
function handleNumberClick(number) {
    currentInput += number;
    display.value = currentInput;
}

// Function to handle operator button clicks
function handleOperatorClick(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculateResult();
        }
        currentOperator = operator;
        currentInput += operator;
        display.value = currentInput;
    }
}

// Function to perform the calculation
function calculateResult() {
    if (currentOperator !== '' && currentInput !== '') {
        const parts = currentInput.split(currentOperator);
        if (parts.length === 2) {
            const num1 = parseFloat(parts[0]);
            const num2 = parseFloat(parts[1]);
            switch (currentOperator) {
                case '+':
                    currentInput = num1 + num2;
                    break;
                case '-':
                    currentInput = num1 - num2;
                    break;
                case '*':
                    currentInput = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        currentInput = num1 / num2;
                    } else {
                        currentInput = "Error";
                    }
                    break;
                default:
                    currentInput = "Error";
            }
            display.value = currentInput;
            currentOperator = '';
        }
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    display.value = '';
}

// Add event listeners to number and operator buttons
document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (!isNaN(value) || value === '0') {
            handleNumberClick(value);
        } else if (operators.includes(value)) {
            handleOperatorClick(value);
        } else if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearDisplay();
        }
    });
});
