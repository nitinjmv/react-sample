import { useState } from "react";
import { IEmployee } from "./IEmployee";
import { Card } from "react-bootstrap";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState<IEmployee[]>(
    JSON.parse(localStorage.getItem("employees") || "[]")
  );

  function handleClick() {
    setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>List of Employees</Card.Title>
        <Card.Text>
          <table className="table">
            {employees.map((e: IEmployee) => {
              return (
                <>
                  <tr>
                    <td>{e.name}</td>
                    <td> {e.email}</td>
                    <td>Delete</td>
                    <td>Edit</td>
                  </tr>
                </>
              );
            })}
          </table>
        </Card.Text>
        <div className="d-grid">
          <button onClick={handleClick}>Refresh</button>
        </div>
      </Card.Body>
    </Card>
  );
};
