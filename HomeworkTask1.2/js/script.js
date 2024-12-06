var display = document.getElementById("display");
var acButton = document.getElementById("ac");
var existResult = false;


function appendToDisplay(input) {
    if (existResult) {
        clear();
    }
    let currentValue = display.innerText;

    if (['+', '-', '×', '÷', '%', '.'].includes(input)) {
        if (currentValue === "" || currentValue === "0") {
            return;
        }

        let lastChar = currentValue[currentValue.length - 1];
        if (['+', '-', '×', '÷', '%', '.'].includes(lastChar)) {
            return;
        }
    }

    if (input === '.') {
        let numbers = currentValue.split(/[\+\-\×\÷\%\=]+/);
        let lastNumber = numbers[numbers.length - 1];
        if (lastNumber.includes('.')) {
            return;
        }
    }

    var zeroButton = document.getElementById("zero");
    if ('÷'.includes(input)) {
        zeroButton.disabled = true;
    } else {
        zeroButton.disabled = false;
    }

    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}


function clear() {
    display.innerText = "0";
    existResult = false;
}

function equall() {
    try {
        let expression = display.innerText
            .replace('÷', '/')
            .replaceAll('×', '*');
        let result = eval(expression);
        
        if (typeof result === 'number') {
            result = result.toFixed(7);
            result = parseFloat(result).toString();
        }
        display.innerText = result;
        existResult = true;
        
    } catch {
        display.innerText = "Error";
    }
}



function plusMinus() {
    let value = parseFloat(display.innerText);
    if (!isNaN(value)) {
        display.innerText = (-value).toString();
    }
}

acButton.addEventListener('click', clear);

