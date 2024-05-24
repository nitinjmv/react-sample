import { useState } from "react";
import { Card } from "react-bootstrap";

type RandomNumberProps = {
  min: number;
  max: number;
};

export const RandomNumber = (props: RandomNumberProps) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * (props.max - props.min) + props.min);
  };

  const [num, setNum] = useState(randomNumber());

  const refresh = () => {
    setNum(randomNumber());
  };

  return (
    <Card>
      <h1>{num}</h1>
      <button onClick={() => refresh()}>Refresh</button>
    </Card>
  );
};
