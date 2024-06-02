import { count } from "console";
import React, { MouseEvent, useState } from "react";
import { Card } from "react-bootstrap";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <Card>
      <Card.Title>{counter}</Card.Title>
      <Card.Body>
        <Card.Text>
          <button value="plus" onClick={handlePlus}>
            Plus
          </button>
          <button value="minus" onClick={handleMinus}>
            Minus
          </button>
          <button onClick={reset}>Reset</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
