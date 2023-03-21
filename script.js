function display (value) {
    let current = document.querySelector('.screen-text');
    let lastInput = current.textContent.split('').pop();
    if (lastInput === ' ' && typeof value !== 'number' && value !== '.') {
        let arr = current.textContent.split('');
        arr.splice(arr.length - 3, 3);
        current.textContent = arr.toString().replaceAll(',','') + value;
    } else if (current.textContent === '0' && typeof value !== 'number' ) {
        current.textContent = current.textContent + value;
    } else if (current.textContent === '0' && typeof value === 'number') {
        current.textContent = value;
    } else {
        current.textContent = current.textContent + value;
    };
};

function allClear () {
    let current = document.querySelector('.screen-text');
    current.textContent = '0';
};

function clearEntry () {
    let current = document.querySelector('.screen-text');
    let lastInput = current.textContent.split('').pop();
    if (lastInput === ' ') {
        let arr = current.textContent.split('');
        arr.splice(arr.length - 3, 3);
        current.textContent = arr.toString().replaceAll(',','');
    } else {
        let arr = current.textContent.split('');
        arr.pop();
        current.textContent = arr.toString().replaceAll(',','');
    };
    if (current.textContent.split('').length === 0) {
        current.textContent = '0';
    }
};

function resolve () {
    let current = document.querySelector('.screen-text');
    let replaceX = current.textContent.replaceAll('x','*');
    let values = replaceX.split(' ');
    let numbers = [];
    let operators = []; 
    for (let i = 0; i<values.length; i++) {
        (i % 2 === 0 ? numbers:operators).push(values[i]); 
    };
    let result = +numbers[0];
    if (Number.isInteger(Number(replaceX.split('').pop()))) {
        for (let opIndex = 0; opIndex<operators.length; opIndex++) {
            switch (operators[opIndex]) {
                case '+':
                    result = result + (+numbers[opIndex + 1]);
                    break;
                case '-':
                    result = result - (+numbers[opIndex + 1]);
                    break;
                case '*':
                    result = result * (+numbers[opIndex + 1]);
                    break;
                case '/':
                    result = result / (+numbers[opIndex + 1]);
                    break;
                case '%':
                    result = result % (+numbers[opIndex + 1]);
                    break;
            };
        };
    } current.textContent = result;
};
