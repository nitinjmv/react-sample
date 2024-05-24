import { Separator } from "./components/Separator";
import { HideDisplay } from "./components/HideDisplay";
import { RandomNumber } from "./components/RandomNumber";
import RandomNumberInRange from "./components/RandomNumberInRange";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FormTest } from "./components/FormTest";
import { FormTest3 } from "./components/FormTest3";
import { FormTest2 } from "./components/FormTest2";
import CardExample from "./components/CardExample";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { SimpleBox } from "./components/SimpleBox";
import { BoxWithButton } from "./components/BoxWithButton";
import { AddEmployee } from "./components/employee/AddEmployee";
import { EmployeeList } from "./components/employee/EmployeeList";
import { EmployeeCount } from "./components/employee/EmployeeCount";

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
      <Container className="container bg-dark text-white">
        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <AddEmployee />
          </Col>
          <Col className="col px-md-5">
            <EmployeeList />
          </Col>
          <Col className="col px-md-5">
            <EmployeeCount />
          </Col>
        </Row>

        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <Separator
              component="Hide & Display Text on Click"
              display={true}
            />
            <HideDisplay data="Hello world!!" />
          </Col>
          <Col className="col px-md-5">
            <Separator component="Random Number Generator" display={true} />
            <RandomNumber min={1} max={100} />
          </Col>
          <Col className="col px-md-5">
            <Separator
              component="Random Number Generator between the provided range"
              display={true}
            />
            <RandomNumberInRange />
          </Col>
        </Row>

        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <Separator
              component="Hide & Display Text on Click"
              display={true}
            />
            <FormTest />
          </Col>
          <Col className="col px-md-5">
            <Separator component="Random Number Generator" display={true} />
            <FormTest3 />
          </Col>
          <Col className="col px-md-5">
            <Separator
              component="Random Number Generator between the provided range"
              display={true}
            />
            <FormTest2 />
          </Col>
        </Row>

        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <Separator
              component="Hide & Display Text on Click"
              display={true}
            />
            <CardExample />
          </Col>
          <Col className="col px-md-5">
            <Separator component="Random Number Generator" display={true} />
            <FormTest3 />
          </Col>
          <Col className="col px-md-5">
            <Separator
              component="Random Number Generator between the provided range"
              display={true}
            />
            <Greet isLoggedIn={true} messageCount={110} name="JMV" />
          </Col>
        </Row>

        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <Separator
              component="Hide & Display Text on Click"
              display={true}
            />
            <Accordion />
          </Col>
          <Col className="col px-md-5">
            <Separator component="Random Number Generator" display={true} />
            <Person name={personName} />
          </Col>
          <Col className="col px-md-5">
            <Separator
              component="Random Number Generator between the provided range"
              display={true}
            />
            <PersonList names={personNames} />
          </Col>
        </Row>

        <Row className="row mx-md-n5">
          <Col className="col px-md-5">
            <Separator
              component="Hide & Display Text on Click"
              display={true}
            />
            <Accordion />
          </Col>
          <Col className="col px-md-5">
            <Separator component="Random Number Generator" display={true} />
            <BoxWithButton />
          </Col>
          <Col className="col px-md-5">
            <Separator
              component="Random Number Generator between the provided range"
              display={true}
            />
            <SimpleBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
