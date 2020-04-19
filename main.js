let screenDisplay = document.querySelector('#screen-display');
let numberButtons = document.querySelectorAll(".number-buttons");
let clearButton = document.querySelector('#clear');
let operatorButtons = document.querySelectorAll('.operators');
let backArrowButton = document.querySelector("#back-arrow");

let screenInput = '0';
let pendingValue;
let evalInput = [];

let currentScreenDisplay = (e) => {
    let buttonText = e.target.innerText;
    if(screenInput === "0"){
        screenInput = ''
    }
    screenInput += buttonText;
    screenDisplay.textContent = screenInput;
}

for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", currentScreenDisplay);
}

clearButton.addEventListener('click', ()=> {
    screenInput = '0'
    screenDisplay.innerText = screenInput
});

let operations = (e) =>{
    let calculations = e.target.innerText;
    switch(calculations){
        case '÷':
            pendingValue = screenInput;
            screenInput = " "
            screenDisplay.innerText = screenInput;
            evalInput.push(pendingValue, "/");
            break;
        case 'x':
            pendingValue = screenInput;
            screenInput = " ";
            screenDisplay.innerText = screenInput;
            evalInput.push(pendingValue, "*");
            break;
        case '-':
            pendingValue = screenInput;
            screenInput = " ";
            screenDisplay.innerText = screenInput;
            evalInput.push(pendingValue, "-");
            break;
        case '+':
            pendingValue = screenInput;
            screenInput = " ";
            screenDisplay.innerText = screenInput;
            evalInput.push(pendingValue, "+");
            break;
        case "=":
            evalInput.push(screenInput);
            let yes = eval(evalInput.join(' '));
            screenInput = yes + '';
            screenDisplay.innerText = screenInput;
            evalInput = [];
            break;
        default:
            break;
    }
}

for(let i= 0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', operations);
}


