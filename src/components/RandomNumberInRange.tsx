import React, { useState } from "react";

const RandomNumberInRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const randomNumber = () => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [num, setNum] = useState(randomNumber());

  const refresh = () => {
    setMin(1);
    setMax(5);
    setNum(randomNumber());
  };

  return (
    <div>
      <h1>{num}</h1>
      <input type="text" placeholder="Min" name="min" />{" "}
      <input type="text" placeholder="Max" name="max" />{" "}
      <button onClick={() => refresh()}>Generate</button>
    </div>
  );
};

export default RandomNumberInRange;
