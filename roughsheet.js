// BY THE WAY, THIS IS A ROUGH SHEET, THE CODES MIGHT GIVE SOME CRAZY ERROR OR MIGHT NOT WORK PROPERLY

// store targeted dom elements
let numberButtons = document.querySelectorAll(".number-button");
let screenInput = document.querySelector("#screen-input");
let clear = document.querySelector("#clear");
let backArrow = document.querySelector("#back-arrow");
let operatorButtons = document.querySelectorAll(".operators");

// assign variables that will store our current input, store the calculations and our pending input
let screenDisplay = 0;
let evalInput = [];
let pendingVal;

// clear.addEventListener("click", ()=> {

// });

// backArrow.addEventListener("click", ()=> {

// });
// function for clicking numbers
let updatingScreenDisplay = (e) => {
    let buttonText = e.target.innerText;
    if (screenDisplay === '0') {
        screenDisplay = ''
    }
    screenDisplay += buttonText;
    screenInput.innerText = screenDisplay
}

// function for the operators(addition, etc)
let calculations = (e) => {
    let operators = e.target.innerText;
    switch (operators) {
        case '÷':
            pendingVal = screenDisplay;
            screenDisplay = "0"
            screenInput.innerText = screenDisplay;
            evalInput.push(pendingVal, "/");
            break;
        case 'x':
            pendingVal = screenDisplay;
            screenDisplay = '0';
            screenInput.innerText = screenDisplay;
            evalInput.push(pendingVal, '*');
            break;
        case '-':
            pendingVal = screenDisplay;
            screenDisplay = '0';
            screenInput.innerText = screenDisplay;
            evalInput.push(pendingVal, '-');
            break;
        case '+':
            pendingVal = screenDisplay;
            screenDisplay = '0';
            screenInput.innerText = screenDisplay;
            evalInput.push(pendingVal, '+');
            break;
        case '=':
            evalInput.push(screenDisplay);
            let evaluation = eval(evalInput.join(' '));
            screenDisplay = evaluation + '';
            screenInput.innerText = screenDisplay;
            evalInput = [];
            break
        default:
            break;
    }
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", updatingScreenDisplay)
    console.log('clicked')
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", calculations)
    console.log('clicked now')
}

