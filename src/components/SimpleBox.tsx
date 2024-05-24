import { useState } from "react";

export const SimpleBox = () => {
  const [data, setData] = useState(null);

  function printData(event: any) {
    setData(event.target.value);
  }

  return (
    <div>
      <h1>Enter some data! {data}</h1>
      <input type="text" onChange={printData} />
    </div>
  );
};
