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

// export default class App2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//       totalStatus: true
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = (buttonName) => {
//     const { total, next, operation, totalStatus } = this.state;
//     const result = calculate(
//       {
//         total,
//         next,
//         operation,
//         totalStatus
//       },
//       buttonName
//     );
//     this.setState({
//       total: result.total,
//       next: result.next,
//       operation: result.operation,
//       totalStatus: result.totalStatus
//     });
//   };

//   render() {
//     const { total, next } = this.state;
//     return (
//       <>
//         <Display result={total} next={next} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }
