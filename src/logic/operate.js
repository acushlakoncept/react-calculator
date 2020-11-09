import Big from 'big.js';

export default operate = (numberOne, numberTwo, operation) => {
    num1 = new Big(numberOne)
    num2 = new Big(numberTwo)
    if (operation == "-") {
       return num1 - num2 
    } 
    else if (operation == "+") {
        return num1 + num2 
    }
    else if (operation == "X") {
        return num1 * num2 
    }
    else if (operation == "÷") {
        return num1 / num2 
    }
    else if (operation == "%") {
        return num1/100 || num2/100
    }
}