import { FormEvent } from "react";

export const AddTodo = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your todo" name="todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
