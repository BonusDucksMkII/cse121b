/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    const number1 = Number(document.querySelector('#add1').value);
    const number2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    const number1 = Number(document.querySelector('#subtract1').value);
    const number2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (mult1, mult2) => {return mult1 * mult2};

const multiplyNumbers = () => {
    const mult1 = Number(document.querySelector('#factor1').value);
    const mult2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(mult1, mult2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
let userInput = Number(document.querySelector("#subtotal").value);
let memberBox = document.querySelector("#member");

document.querySelector("#getTotal").addEventListener('click', () => console.log(userInput));

function inputValidate() {
    if (memberBox.className === "checked"){
        memberBox.classList.remove("checked");
    } else {
        memberBox.classList.add("checked");
        
    }
}

memberBox.addEventListener('click', inputValidate);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
