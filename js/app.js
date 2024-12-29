

let display = document.getElementById('pantalla');

function addNumber(number){
    display.value += number;
}


function addOperator(operator){
    if (display.value !== ''){
        display.value += operator;
    }
}


function calculate(){
    try {
        display.value = eval(display.value);
    } catch (console) {
        display.value = 'Error';
    }
}


function clearDisplay(){
    display.value = '';
}