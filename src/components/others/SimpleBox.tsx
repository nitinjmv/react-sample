import { useState } from "react";
import { Card } from "react-bootstrap";

export const SimpleBox = () => {
  const [data, setData] = useState(null);

  function printData(event: any) {
    setData(event.target.value);
  }

  return (
    <Card>
      <h1>Enter some data! {data}</h1>
      <input type="text" onChange={printData} />
    </Card>
  );
};
