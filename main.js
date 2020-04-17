let screenDisplay = document.querySelector('#screen-display');
let numberButtons = document.querySelectorAll(".number-buttons");
let clearButton = document.querySelector('#clear');

let screenInput = '0';

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
    console.log("yes");
}

clearButton.addEventListener('click', ()=> {
    screenInput = '0'
    screenDisplay.innerText = screenInput
})