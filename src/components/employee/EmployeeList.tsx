import { useState } from "react";
import { IEmployee } from "./IEmployee";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState<IEmployee[]>(
    JSON.parse(localStorage.getItem("employees") || "[]")
  );

  function handleClick() {
    setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
  }

  return (
    <>
      List of Employees
      <br />
      <button onClick={handleClick}>Refresh</button>
      <br />
      {employees.map((e: IEmployee) => {
        return (
          <>
            <table border={1} cellPadding={5}>
              <tr>
                <td>{e.name}</td>
                <td> {e.email}</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
};
