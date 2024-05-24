import { FormEvent, useState } from "react";
import { Card } from "react-bootstrap";

export const FormTest = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(event);
  }

  return (
    <Card>
      Hi! {name}, your age is: {age}
      <form id="myform" onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={name} />
        <br />
        Age: <input type="text" name="age" value={age} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};
