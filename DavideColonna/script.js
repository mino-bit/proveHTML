// script.js

let currentExpression = '0';
let historyExpression = '';
let isNewCalculation = true;
let inRadians = true;

const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
const buttonsGrid = document.getElementById('buttons-grid');

// Inizializza il display
display.value = currentExpression;

buttonsGrid.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const buttonText = target.textContent;
        handleButtonClick(buttonText, target);
    }
});

function handleButtonClick(buttonText, buttonElement) {
    if (buttonElement.classList.contains('number-btn') || buttonText === '.') {
        appendNumber(buttonText);
    } else if (buttonElement.classList.contains('operator-btn')) {
        appendOperator(buttonText);
    } else if (buttonText === 'CLEAR') {
        clearDisplay();
    } else if (buttonText === '=') {
        calculate();
    } else if (buttonElement.classList.contains('function-btn')) {
        handleFunction(buttonText);
    } else if (buttonElement.classList.contains('mode-btn')) {
        toggleMode(buttonElement);
    }
}

function appendNumber(num) {
    if (isNewCalculation || currentExpression === '0') {
        currentExpression = num;
        isNewCalculation = false;
    } else {
        currentExpression += num;
    }
    updateDisplay();
}

function appendOperator(operator) {
    // Sostituisci l'ultimo operatore se l'utente ne digita uno nuovo subito dopo
    const lastChar = currentExpression.slice(-1);
    if (['+', '−', '×', '÷'].includes(lastChar)) {
        currentExpression = currentExpression.slice(0, -1) + convertOperator(operator);
    } else {
        currentExpression += convertOperator(operator);
    }
    isNewCalculation = false;
    updateDisplay();
}

function convertOperator(op) {
    switch (op) {
        case '÷': return '/';
        case '×': return '*';
        case '−': return '-';
        case '+': return '+';
        default: return op;
    }
}

function convertToDisplayOperator(op) {
    switch (op) {
        case '/': return '÷';
        case '*': return '×';
        case '-': return '−';
        case '+': return '+';
        default: return op;
    }
}

function calculate() {
    if (isNewCalculation) return;

    try {
        historyExpression = currentExpression;
        // Sostituisci gli operatori visuali con quelli JavaScript prima di eval
        const evalExpression = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');
        
        // eslint-disable-next-line no-eval
        let result = eval(evalExpression);

        if (isNaN(result) || !isFinite(result)) {
            result = 'Error';
        } else {
            result = parseFloat(result.toFixed(10)); // Limita la precisione
        }

        display.value = result;
        historyDisplay.textContent = currentExpression + ' =';
        currentExpression = String(result);
        isNewCalculation = true;

    } catch (e) {
        display.value = 'Error';
        historyDisplay.textContent = currentExpression + ' =';
        currentExpression = '0';
        isNewCalculation = true;
    }
}

function clearDisplay() {
    currentExpression = '0';
    historyExpression = '';
    isNewCalculation = true;
    updateDisplay();
    historyDisplay.textContent = '';
}

function updateDisplay() {
    display.value = currentExpression;
}

function handleFunction(func) {
    if (isNewCalculation && currentExpression === '0') {
        currentExpression = ''; // Pulisce lo 0 iniziale prima di una funzione
    }

    const value = parseFloat(currentExpression);
    let result;

    switch (func) {
        case 'sin':
            result = inRadians ? Math.sin(value) : Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            result = inRadians ? Math.cos(value) : Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            result = inRadians ? Math.tan(value) : Math.tan(value * Math.PI / 180);
            break;
        case 'sin⁻¹':
            result = inRadians ? Math.asin(value) : Math.asin(value) * 180 / Math.PI;
            break;
        case 'cos⁻¹':
            result = inRadians ? Math.acos(value) : Math.acos(value) * 180 / Math.PI;
            break;
        case 'tan⁻¹':
            result = inRadians ? Math.atan(value) : Math.atan(value) * 180 / Math.PI;
            break;
        case 'log':
            result = Math.log10(value); // Logaritmo in base 10
            break;
        case 'ln':
            result = Math.log(value); // Logaritmo naturale
            break;
        case 'x!':
            result = factorial(value);
            break;
        case 'π':
            result = Math.PI;
            break;
        case 'e':
            result = Math.E;
            break;
        case 'xʸ': 
            currentExpression += '^';
            updateDisplay();
            return; 
        case '√':
            result = Math.sqrt(value);
            break;
        case '%': 
            currentExpression += '/100';
            calculate();
            return;
        default:
            return;
    }

    if (isNaN(result) || !isFinite(result)) {
        display.value = 'Error';
        currentExpression = '0';
    } else {
        display.value = parseFloat(result.toFixed(10));
        currentExpression = String(display.value);
    }
    historyDisplay.textContent = `${func}(${value}) =`; 
    isNewCalculation = true;
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

function toggleMode(buttonElement) {
    inRadians = !inRadians;
    buttonElement.textContent = inRadians ? 'Rad' : 'Deg';
}

document.addEventListener('DOMContentLoaded', () => {
    display.value = '0'; 
});