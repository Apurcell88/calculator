class Calculator {
    constructor(currentTextEl, previousTextEl) {
        this.currentTextEl = currentTextEl;
        this.previousTextEl = previousTextEl;
        this.clear();
    }

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber = this.currentNumber + number;
        
    }

    updateDisplay() {
        this.currentTextEl.innerText = this.currentNumber;
        if (this.operation === undefined) {
            this.previousTextEl.innerText = this.previousNumber
        } else {
            this.previousTextEl.innerText = `${this.previousNumber} ${this.operation}`;
        }
        
    }

    deleteNumber() {
        this.currentNumber = this.currentNumber.slice(0, -1);
    }

    chooseOperation(operation) {
        this.operate();

        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    operate() {
        const parsedCurrentFloat = parseFloat(this.currentNumber);
        const parsedPreviousFloat = parseFloat(this.previousNumber);

        switch (this.operation) {
            case '/':
                if (parsedCurrentFloat === 0 || parsedPreviousFloat === 0) {
                    alert(`You can't divide by 0!`);
                } else {
                    solution = parsedPreviousFloat / parsedCurrentFloat;
                    break;
                }
            case '*':
                solution = parsedPreviousFloat * parsedCurrentFloat;
                break;
            case '-':
                solution = parsedPreviousFloat - parsedCurrentFloat;
                break;
            case '+':
                solution = parsedPreviousFloat + parsedCurrentFloat;
                break;
            default:
                return;
        }
        
        this.currentNumber = solution.toFixed(2);
        this.operation = undefined;
        this.previousNumber = '';
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const clearAllBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const currentTextEl = document.querySelector('[data-current-operand]');
const previousTextEl = document.querySelector('[data-previous-operand]');

let myCalc = new Calculator(currentTextEl, previousTextEl);

let solution;

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        myCalc.appendNumber(btn.innerText);
        myCalc.updateDisplay();
    });
});

operationBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        myCalc.chooseOperation(btn.innerText);
        myCalc.updateDisplay();
    });
});

deleteBtn.addEventListener('click', (e) => {
    myCalc.deleteNumber();
    myCalc.updateDisplay();
});

clearAllBtn.addEventListener('click', (e) => {
    myCalc.clear();
    myCalc.updateDisplay();
});

equalsBtn.addEventListener('click', (e) => {
    myCalc.operate();
    myCalc.updateDisplay();
});