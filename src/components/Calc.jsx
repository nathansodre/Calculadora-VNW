import React, { useState } from "react";
import styled from "styled-components";

const Calculadora = styled.div`
  width: 300px;
  background: #333;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Display = styled.div`
  grid-column: span 4;
  background: #444;
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
  text-align: right;
  color: white;
`;

const Button = styled.button`
  background: #555;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #777;
  }
`;

function Calc() {
  const [displayValue, setDisplayValue] = useState("");
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleOperatorClick = (newOperator) => {
    if (input !== "") {
      calculate();
    }
    setOperator(newOperator);
    setInput(displayValue);
    setDisplayValue("");
  };

  const calculate = () => {
    const inputValue = parseFloat(input);
    const displayValueNum = parseFloat(displayValue);

    switch (operator) {
      case "+":
        setDisplayValue((inputValue + displayValueNum).toString());
        break;
      case "-":
        setDisplayValue((inputValue - displayValueNum).toString());
        break;
      case "*":
        setDisplayValue((inputValue * displayValueNum).toString());
        break;
      case "/":
        setDisplayValue((inputValue / displayValueNum).toString());
        break;
      default:
        break;
    }

    setInput("");
    setOperator("");
  };

  const clear = () => {
    setDisplayValue("");
    setInput("");
    setOperator("");
  };

  return (
    <Calculadora>
      <Display>{displayValue || input || "0"}</Display>
      <Button onClick={() => handleNumberClick("7")}>7</Button>
      <Button onClick={() => handleNumberClick("8")}>8</Button>
      <Button onClick={() => handleNumberClick("9")}>9</Button>
      <Button onClick={() => handleOperatorClick("+")}>+</Button>
      <Button onClick={() => handleNumberClick("4")}>4</Button>
      <Button onClick={() => handleNumberClick("5")}>5</Button>
      <Button onClick={() => handleNumberClick("6")}>6</Button>
      <Button onClick={() => handleOperatorClick("-")}>-</Button>
      <Button onClick={() => handleNumberClick("1")}>1</Button>
      <Button onClick={() => handleNumberClick("2")}>2</Button>
      <Button onClick={() => handleNumberClick("3")}>3</Button>
      <Button onClick={() => handleOperatorClick("*")}>*</Button>
      <Button onClick={() => handleNumberClick("0")}>0</Button>
      <Button onClick={clear}>C</Button>
      <Button onClick={calculate}>=</Button>
      <Button onClick={() => handleOperatorClick("/")}>/</Button>
    </Calculadora>
  );
}

export default Calc;
