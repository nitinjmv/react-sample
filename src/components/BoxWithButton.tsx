import { useState } from "react";
import { Card } from "react-bootstrap";

export const BoxWithButton = () => {
  const [data, setData] = useState(null);
  const [isDisplay, displayData] = useState(false);

  function getData(event: any) {
    displayData(false);
    setData(event.target.value);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{isDisplay ? data : "Enter some data!"}</Card.Title>
        <Card.Text>
          <input type="text" onChange={getData} />
        </Card.Text>
        <div className="d-grid">
          <button onClick={() => displayData(true)}>Click</button>
        </div>
      </Card.Body>
    </Card>
  );
};
