import { fireEvent } from "@testing-library/react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { AddTodo } from "./components/AddTodo";
import { Counter } from "./components/Counter";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Separator } from "./components/Separator";
import { HideDisplay } from "./components/HideDisplay";
import { RandomNumber } from "./components/RandomNumber";
import RandomNumberInRange from "./components/RandomNumberInRange";

function App() {
  const personName = {
    first: "Nitin",
    last: "JMV",
  };

  const personNames = [
    { first: "ram", last: "verma" },
    { first: "ram", last: "verma" },
    { first: "ram", last: "verma" },
  ];

  return (
    <div className="App">
      <Separator component="Hide & Display Text on Click" display={true} />
      <HideDisplay data="Hello world!!" />

      <Separator component="Random Number Generator" display={true} />
      <RandomNumber min={1} max={100} />

      <Separator
        component="Random Number Generator between the provided range"
        display={true}
      />
      <RandomNumberInRange />

      {/* <Counter /> */}
      {/* <Oscar>
        <Heading>Film33</Heading>
      </Oscar> */}
      {/* <Heading>JMV</Heading> */}
      {/* <Status status="error" /> */}
      {/* <Greet isLoggedIn={true} messageCount={12} name="JMV" />
      <AddTodo />
      <Person name={personName} />
      <PersonList names={personNames} /> */}
    </div>
  );
}

export default App;
