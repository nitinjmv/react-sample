import { useState } from "react";

type HideDisplayProps = {
  data: string;
};

export const HideDisplay = (props: HideDisplayProps) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Display"}
      </button>
      <h1>{toggle ? props.data : ""}</h1>
    </div>
  );
};
