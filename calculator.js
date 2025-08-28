function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let arg1, arg2, operator;

function operate(arg1, arg2, operator) {
    switch (operator) {
        case '+':
            return add(arg1, arg2);
        case '-':
            return subtract(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        case '/':
            return divide(arg1, arg2);
        default:
            return 'Invalid';
    }
}
