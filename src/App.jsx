import { useState } from 'react';
import './App.css'
function CalcDisplay({dispValue}) {
  return (
      <div className='Display'>
        {dispValue}
      </div>
  );
}
function CalcButton({buttonLabel, buttonClassName = "Button", onClick}) {
  return (
      <button className={buttonClassName} onClick={onClick}>
        {buttonLabel}
        </button>
  );
}
function App() {
  const[disp, setDisp] = useState("0");
  const [savedValue, setSavedValue] = useState(null);
  const [selectedOp, setSelectedOp] = useState(null);
  const [showingOp, setShowingOp] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (value === "Evangelista") {
      setDisp("Shanreel Evangelista");
      setShowingOp(true);
      return;
    }

    if (value === "CLR") {
      setDisp("0");
      setSavedValue(null);
      setSelectedOp(null);
      setShowingOp(false);
      return;
    }

    if (value === "=") {
      if (savedValue !== null && selectedOp) {
        const current = parseFloat(disp);
        let result;
        if (selectedOp === "+") result = savedValue + current;
        if (selectedOp === "-") result = savedValue - current;
        if (selectedOp === "×") result = savedValue * current;
        if (selectedOp === "÷") result = savedValue / current;
        setDisp(String(result));
        setSavedValue(null);
        setSelectedOp(null);
        setShowingOp(false);
      }
      return;
    }

    if (value === "+" || value === "-" || value === "×" || value === "÷") {
      setSavedValue(parseFloat(disp));
      setSelectedOp(value);
      setDisp(value);
      setShowingOp(true);
      return;
    }

    if (showingOp) {
      setDisp(value);
      setShowingOp(false);
    } else {
      if (disp === "0") {
        setDisp(value);
      } else {
        setDisp(disp + value);
      }
    }
  }

  return (
    <div className='Background'>
    <div className = 'App'>
      <div className='Header'><strong>Calculator of Shanreel Evangelista - WMD3A</strong></div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp}/>
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={8} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={9} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'÷'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={4} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={5} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={6} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'×'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={1} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={2} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={3} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'-'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'CLR'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={0} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'='} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'+'} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={"Evangelista"} buttonClassName="Button surname" onClick={buttonClickHandler}/>
        </div>
      </div>
    </div>
    </div>
  )
}
export default App