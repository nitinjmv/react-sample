import { MouseEvent, useState } from "react";
import { IEmployee } from "./IEmployee";

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
    <>
      <form>
        <h2>Add Employee</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleClean}>Clean</button>
      </form>
    </>
  );
};
