import { useState } from "react";
import { Card } from "react-bootstrap";

export const EmployeeCount = () => {
  function getCount() {
    let len: number = JSON.parse(
      localStorage.getItem("employees") || "[]"
    ).length;
    console.log(len);
    return len;
  }
  const [count, setCount] = useState(() => getCount());

  function handleClick() {
    setCount(getCount());
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Employee Count: {count}</Card.Title>
        <div className="d-grid">
          <button onClick={handleClick}>Refresh</button>
        </div>
      </Card.Body>
    </Card>
  );
};
