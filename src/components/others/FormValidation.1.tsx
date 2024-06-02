import { Card } from "react-bootstrap";
import { FormEvent, ChangeEvent, useState } from "react";

interface IUserRegistration {
  name: string;
  password: string;
  phone: number;
  email: string;
  age: number;
  gender: string;
  interests: string[];
  dob: Date;
}
export const FormValidation: React.FC = () => {
  let fields: IUserRegistration = {
    name: "",
    password: "",
    phone: 1,
    email: "",
    age: 1,
    gender: "",
    interests: [],
    dob: new Date(),
  };

  const [formData, setFormData] = useState<IUserRegistration>(fields);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    let name = e.target.name;
    let value = e.target.value;

    let updateFields: IUserRegistration = {
      ...formData,
    };

    switch (name) {
      case "name": {
        updateFields.name = value;
        break;
      }
      case "password": {
        updateFields.password = value;
        break;
      }
      case "phone": {
        updateFields.phone = Number(value);
        break;
      }
      case "email": {
        updateFields.email = value;
        break;
      }
      case "age": {
        updateFields.age = Number(value);
        break;
      }
      case "gender": {
        updateFields.gender = value;
        break;
      }
      case "dob": {
        updateFields.dob = new Date(value);
        break;
      }
    }
    setFormData(updateFields);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Card.Title>Form Validation</Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
              Name:
              <input
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              Password:
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              Phone:
              <input
                type="number"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              Email:
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              Age:
              <input
                type="number"
                name="age"
                placeholder="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div>
              DOB:
              <input
                type="date"
                name="dob"
                placeholder="DOB"
                onChange={handleChange}
              />
            </div>
            <div>
              Gender:
              <select name="gender" value={formData.gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label>Interests: </label>
              <input
                type="checkbox"
                name="music"
                checked={formData.interests.includes("music")}
              />
              Music
              <input
                type="checkbox"
                name="gym"
                checked={formData.interests.includes("gym")}
              />
              Gym
              <input
                type="checkbox"
                name="sports"
                checked={formData.interests.includes("sports")}
              />
              Sports
            </div>
          </Card.Text>
          <div className="d-grid">
            <button type="submit">Register</button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
