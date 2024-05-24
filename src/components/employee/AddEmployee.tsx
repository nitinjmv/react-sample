import { MouseEvent, useState } from "react";
import { IEmployee } from "./IEmployee";
import { Card } from "react-bootstrap";

export const AddEmployee = () => {
  let localStorageKey = "employees";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.preventDefault();

    const employee: IEmployee = {
      id: Math.floor(Math.random() * 100),
      name: name,
      email: email,
    };
    saveInLocalStorage(employee);
  }

  function saveInLocalStorage(employee: IEmployee) {
    let e: IEmployee[] = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]"
    );

    if (e.length === 0) {
      localStorage.setItem(localStorageKey, JSON.stringify([employee]));
    } else {
      e.push(employee);
      localStorage.setItem(localStorageKey, JSON.stringify(e));
    }
  }

  function handleClean() {
    setName("");
    setEmail("");
    localStorage.removeItem(localStorageKey);
  }

  return (
    <Card>
      <Card.Body>
        <form>
          <Card.Title>Add Employee</Card.Title>
          <Card.Text>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Card.Text>
          <div className="d-grid">
            <button onClick={handleSubmit}>Add</button>
            <button onClick={handleClean}>Clean</button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};
