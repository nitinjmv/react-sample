import { FormEvent } from "react";
import { FormInput3 } from "./FormInput3";

export const FormTest3 = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div>
      <h1>Form Submit test</h1>
      <form onSubmit={handleSubmit}>
        <FormInput3 name="username" placeholder="UserName" isMandatory={true} />
        <FormInput3 name="email" placeholder="Email" isMandatory={true} />
        <FormInput3 name="age" placeholder="Age" />
        <button>Submit</button>
      </form>
    </div>
  );
};
