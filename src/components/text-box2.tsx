import { useState } from "react";

export const BoxWithButton = () => {
  const [data, setData] = useState(null);
  const [isDisplay, displayData] = useState(false);

  function getData(event: any) {
    displayData(false);
    setData(event.target.value);
  }

  return (
    <div>
      {isDisplay ? <h1>{data}</h1> : <h1>Enter some data!</h1>}

      <input type="text" onChange={getData} />
      <button onClick={() => displayData(true)}>Click</button>
    </div>
  );
};
