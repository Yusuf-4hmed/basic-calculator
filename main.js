const calculatorScreen = document.getElementById("calculator-screen");
const screenText = document.getElementById("screen-text")

const backButton = document.getElementById("back-button");
const oneButton = document.getElementById("1-button");
const twoButton = document.getElementById("2-button");
const threeButton = document.getElementById("3-button");
const fourButton = document.getElementById("4-button");
const fiveButton = document.getElementById("5-button");
const sixButton = document.getElementById("6-button");
const sevenButton = document.getElementById("7-button");
const eightButton = document.getElementById("8-button");
const nineButton = document.getElementById("9-button");
const zeroButton = document.getElementById("0-button");
const decimalButton = document.getElementById("decimal-button");

const divideButton = document.getElementById("divide-button");
const multiplyButton = document.getElementById("multiply-button");
const subtractButton = document.getElementById("subtract-button");
const addButton = document.getElementById("add-button");
const equalsButton = document.getElementById("equals-button");

let screenArray = [];

oneButton.addEventListener("click", () => {
    screenArray.push(1);
    screenText.innerText = screenArray.join('');
})
twoButton.addEventListener("click", () => {
    screenArray.push(2);
    screenText.innerText = screenArray.join('');
})
threeButton.addEventListener("click", () => {
    screenArray.push(3);
    screenText.innerText = screenArray.join('');
})
fourButton.addEventListener("click", () => {
    screenArray.push(4);
    screenText.innerText = screenArray.join('');
})
fiveButton.addEventListener("click", () => {
    screenArray.push(5);
    screenText.innerText = screenArray.join('');
})
sixButton.addEventListener("click", () => {
    screenArray.push(6);
    screenText.innerText = screenArray.join('');
})
sevenButton.addEventListener("click", () => {
    screenArray.push(7);
    screenText.innerText = screenArray.join('');
})
eightButton.addEventListener("click", () => {
    screenArray.push(8);
    screenText.innerText = screenArray.join('');
})
nineButton.addEventListener("click", () => {
    screenArray.push(9);
    screenText.innerText = screenArray.join('');
})
zeroButton.addEventListener("click", () => {
    screenArray.push(0);
    screenText.innerText = screenArray.join('');
})
decimalButton.addEventListener("click", () => {
    screenArray.push(".");
    screenText.innerText = screenArray.join('');
})

divideButton.addEventListener("click", () => {
    screenArray.push("/");
    screenText.innerText = screenArray.join('');
})
multiplyButton.addEventListener("click", () => {
    screenArray.push("*");
    screenText.innerText = screenArray.join('');
})
subtractButton.addEventListener("click", () => {
    screenArray.push("-");
    screenText.innerText = screenArray.join('');
})
addButton.addEventListener("click", () => {
    screenArray.push("+");
    screenText.innerText = screenArray.join('');
})

equalsButton.addEventListener("click", () => {
    screenText.innerText = eval(screenText.innerText);
    screenArray = [];
    screenArray.push(screenText.innerText) 

})
backButton.addEventListener("click", () => {
    screenArray.pop()
    screenText.innerText = screenArray.join('')
})

document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
      screenArray.push(1);
      screenText.innerText = screenArray.join('');  
    } else if (e.key === "2") {
      screenArray.push(2);
      screenText.innerText = screenArray.join('');  
    } else if (e.key === "3") {
        screenArray.push(3);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "4") {
        screenArray.push(4);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "5") {
        screenArray.push(5);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "6") {
        screenArray.push(6);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "7") {
        screenArray.push(7);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "8") {
        screenArray.push(8);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "9") {
        screenArray.push(9);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "0") {
        screenArray.push(0);
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "Backspace") {
        screenArray.pop()
        screenText.innerText = screenArray.join('')
    } else if (e.key === "+") {
        screenArray.push("+");
        screenText.innerText = screenArray.join('')
    } else if (e.key === "=") {
        screenText.innerText = eval(screenText.innerText);
        screenArray = [];
        screenArray.push(screenText.innerText)
    } else if (e.key === "Enter") {
        screenText.innerText = eval(screenText.innerText);
        screenArray = [];
        screenArray.push(screenText.innerText)
    } else if (e.key === "*") {
        screenArray.push("*");
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "/") {
        screenArray.push("/");
        screenText.innerText = screenArray.join('');  
    } else if (e.key === "-") {
        screenArray.push("-");
        screenText.innerText = screenArray.join('');  
    } else if (e.key === ".") {
        screenArray.push(".");
        screenText.innerText = screenArray.join('');  
    }
    
})
