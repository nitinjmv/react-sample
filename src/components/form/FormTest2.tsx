import { FormEvent, useRef } from "react";
import { FormInput } from "./FormInput";
import { Card } from "react-bootstrap";

export const FormTest2 = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userNameRef);
    console.log(emailRef);
    console.log(ageRef);
  };

  return (
    <Card>
      <h1>Submit form with useRef hook</h1>
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" name="username" isMandatory={true} />
        <FormInput placeholder="Email" name="email" isMandatory={true} />
        <FormInput placeholder="Age" name="age" />
        <button>Submit</button>
      </form>
    </Card>
  );
};
