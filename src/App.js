import { useState } from "react";
import "./App.scss";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const clearLast = () => {
    setResult(result.slice(0,result.length - 1));
  };

  const calculate = () => {
    try {
    setResult(eval(result).toFixed(2)); 
    }
    catch(err) {
      window.alert('Invalid Input...');
    }
  }
  const handleKey = (event) => {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
}

  return (
    <div className="container__calculator">
        <input type="text" value={result} />
          <div className="row">
            <button name="Clear" id="clear" className="cal__operator"  onClick={clear}>Clear</button>
            <button name="C"  className="cal__operator" onClick={clearLast}>C</button>
          </div>
            <div className="row">
              <button name="7" onClick={handleClick} onChange={handleKey}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="/" className="cal__operator" onClick={handleClick}>/</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="*" className="cal__operator" onClick={handleClick}>*</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="+" className="cal__operator" onClick={handleClick}>+</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." className="cal__operator" onClick={handleClick} >.</button>
              <button name="=" className="cal__operator" onClick={calculate} >=</button>
              <button name="-" className="cal__operator" onClick={handleClick}>-</button>
            </div>
    </div>
  );
};

export default App;