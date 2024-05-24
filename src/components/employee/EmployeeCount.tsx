import { useState } from "react";

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
    <>
      Employee Count: <h1>{count}</h1>
      <button onClick={handleClick}>Refresh</button>
    </>
  );
};
