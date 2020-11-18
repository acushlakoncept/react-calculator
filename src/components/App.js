import React, { useState } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [totalStatus, setTotalStatus] = useState(true);

  const handleClick = buttonName => {
    const result = calculate(
      {
        total,
        next,
        operation,
        totalStatus,
      },
      buttonName,
    );
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
    setTotalStatus(result.totalStatus);
  };

  return (
    <>
      <Display result={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
