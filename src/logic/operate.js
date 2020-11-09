import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '-') {
    result = num1.minus(num2);
  }
  if (operation === '+') {
    result = num1.plus(num2);
  }
  if (operation === 'X') {
    result = num1.times(num2);
  }
  if (operation === '÷') {
    if (numberTwo === 0) {
      result = 'Zero divide Error';
    } else {
      result = num1.div(num2);
    }
  }
  return result.toString();
};

export default operate;
