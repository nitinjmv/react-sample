import { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { save } from "../util/LocalStorageUtil";
import { IUser } from "../types/IUser";

export const SubmitForm = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");
  const [tnc, setTnc] = useState(false);

  function handleClick() {
    const user: IUser = createUserObject(
      userId,
      email,
      dob,
      phone,
      gender,
      tnc
    );
    console.log(user);
    save("users", user);
  }

  function handleReset() {
    setUserId("");
    setDOB(new Date());
    setEmail("");
    setGender("");
    setPhone(0);
    setTnc(false);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>User Registration</Card.Title>
        <Card.Text>
          <input
            type="text"
            placeholder="Enter UserId"
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(Number(e.target.value))}
          />
          <br />
          <input
            type="date"
            placeholder="DOB"
            onChange={(e) => setDOB(new Date(e.target.value))}
          />{" "}
          DOB
          <br />
          <select onChange={(e) => setGender(e.target.value)}>
            <option value="select">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          Agreement of Terms & Conditions: <input type="checkbox" />
        </Card.Text>
        <div className="d-grid">
          <button onClick={handleClick}>Register</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </Card.Body>
    </Card>
  );
};
function createUserObject(
  userId: string,
  email: string,
  dob: Date,
  phone: number,
  gender: string,
  tnc: boolean
) {
  return {
    id: Math.floor(Math.random() * 100),
    userId: userId,
    email: email,
    dob: dob,
    phone: phone,
    gender: gender,
    tnc: tnc,
  };
}
