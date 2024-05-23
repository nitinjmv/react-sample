import React, { MouseEvent, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const hello = () => {
    alert("Hello..");
  };
  const handleClick = (
    event: MouseEvent<HTMLButtonElement>,
    counter: number
  ) => {
    counter++;
    setCounter(counter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={hello}>Hello</button>
      <button value="plus" onClick={(event) => handleClick(event, counter)}>
        Plus
      </button>
      <button value="minus" onClick={(event) => handleClick(event, counter)}>
        Minus
      </button>
    </div>
  );
};
