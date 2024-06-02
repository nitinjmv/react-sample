import React, { useState } from "react";
import { Card } from "react-bootstrap";

//
interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}

export const PassFunctionAsProp: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleGo(e: React.FormEvent): void {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  const handleDone = () => {};

  return (
    <Card>
      <Card.Title>
        <InputBox todo={todo} setTodo={setTodo} handleGo={handleGo} />
      </Card.Title>
      <Card.Body>
        <TodoList todos={todos} setTodos={setTodos} />
      </Card.Body>
    </Card>
  );
};

//
type InputBoxProp = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleGo: (e: React.FormEvent) => void;
};

const InputBox: React.FC<InputBoxProp> = (props: InputBoxProp) => {
  return (
    <form onSubmit={props.handleGo}>
      <input
        type="text"
        placeholder="Enter task"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

//
type TodoListProp = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

const TodoList: React.FC<TodoListProp> = (props: TodoListProp) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </div>
  );
};

//single
type SingleTodoProp = {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

const SingleTodo: React.FC<SingleTodoProp> = (props: SingleTodoProp) => {
  function handleDone(id: number): void {
    props.setTodos(
      props.todos.map((todo) =>
        todo.id === id ? { ...props.todo, isDone: !todo.id } : todo
      )
    );
  }

  return (
    <form>
      {props.todo.isDone ? <h2>{props.todo.todo}</h2> : props.todo.todo}
      <div>
        <span onClick={() => handleDone(props.todo.id)}>Done</span>
      </div>
    </form>
  );
};
