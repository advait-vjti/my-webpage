import React, { useState } from 'react';
import './App.css';

type Operation = 'add' | 'sub' | 'div' | 'mul';

function App() {

  const [num1, setNum1] = useState<string>("0.0");
  const [num2, setNum2] = useState<string>("0.0");
  const [operation, setOperation] = useState<Operation>('add');
  const [result, setResult] = useState<string>("0.0");

  const calculateResult = (n1: number, n2: number, op: Operation): number => {
    let res: number;
    switch (op) {
      case 'add':
        res = n1 + n2;
        break;
      case 'sub':
        res = n1 - n2;
        break;
      case 'mul':
        res = n1 * n2;
        break;
      case 'div':
        res = n1 / n2;
        break;
    }
    return res;
  };

  const onSubmitHandler = () => {
    try {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log('Parsing Error');
        setResult("Error");
        return;
      }

      const res = calculateResult(n1, n2, operation);
      setResult(res.toString());
    } catch (e) {
      console.log(e);
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form className='container__form' onSubmit={(e) => { e.preventDefault(); onSubmitHandler() }}>
        <div>
          <h2>Calculator</h2>
        </div>
        <div className='container__form__num1-div'>
          <label> Number 1: </label>
          <input type="text" value={num1} onChange={(e) => { setNum1(e.target.value) }} placeholder="Enter number 1" />
        </div>
        <div className='container__form__num2-div'>
          <label> Number 2: </label>
          <input type="text" value={num2} onChange={(e) => { setNum2(e.target.value) }} placeholder="Enter number 2" />
        </div>
        <div className='container__form__operation-div' >Operations: </div>
        <div className='container__form__radio-div'>
          <div>
            <input type="radio" name="operation" value="add" defaultChecked onClick={(e) => { setOperation(e.currentTarget.value as Operation) }} />
            <label>Add</label>
          </div>
          <div>
            <input type="radio" name="operation" value="sub" onClick={(e) => { setOperation(e.currentTarget.value as Operation) }} />
            <label>Subtract</label>
          </div>
          <div>
            <input type="radio" name="operation" value="mul" onClick={(e) => { setOperation(e.currentTarget.value as Operation) }} />
            <label>Multiply</label>
          </div>
          <div>
            <input type="radio" name="operation" value="div" onClick={(e) => { setOperation(e.currentTarget.value as Operation) }} />
            <label>Divide</label>
          </div>
        </div>
        <div className="container__form__submit-result-div">
          <input id='submit-btn' type="submit" />
          <div id='result'>{result}</div>
        </div>
      </form>
    </div>
  );
}

export default App;
