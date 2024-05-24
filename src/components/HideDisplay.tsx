import { useState } from "react";
import { Card } from "react-bootstrap";

type HideDisplayProps = {
  data: string;
};

export const HideDisplay = (props: HideDisplayProps) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Card>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Display"}
      </button>
      <h1>{toggle ? props.data : ""}</h1>
    </Card>
  );
};
