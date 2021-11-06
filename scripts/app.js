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
        this.currentNumber = this.currentNumber + number;
        
    }

    updateDisplay() {
        this.currentTextEl.innerText = this.currentNumber;
    }

    deleteNumber() {

    }

    chooseOperation() {

    }

    operate() {

    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const clearAllBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const currentTextEl = document.querySelector('[data-current-operand]');
const previousTextEl = document.querySelector('[data-previous-operand]');

let myCalc = new Calculator(currentTextEl, previousTextEl);

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        myCalc.appendNumber(btn.innerText);
        myCalc.updateDisplay();
    });
});