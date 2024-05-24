import { Separator } from "./components/Separator";
import { HideDisplay } from "./components/HideDisplay";
import { RandomNumber } from "./components/RandomNumber";
import RandomNumberInRange from "./components/RandomNumberInRange";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FormTest } from "./components/form/FormTest";
import { FormTest3 } from "./components/form/FormTest3";
import { FormTest2 } from "./components/form/FormTest2";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { SimpleBox } from "./components/SimpleBox";
import { BoxWithButton } from "./components/BoxWithButton";
import { AddEmployee } from "./components/employee/AddEmployee";
import { EmployeeList } from "./components/employee/EmployeeList";
import { EmployeeCount } from "./components/employee/EmployeeCount";
import { AccordionTest } from "./components/AccordionTest";
import { FormInput3 } from "./components/form/FormInput3";

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
    <div>
      <Container className="bg-dark">
        <Row className="row gy-5">
          <Col md={4}>
            <AddEmployee />
          </Col>
          <Col md={4}>
            <EmployeeList />
          </Col>
          <Col md={4}>
            <EmployeeCount />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <HideDisplay data="Hello world!!" />
          </Col>
          <Col md={4}>
            <RandomNumber min={1} max={100} />
          </Col>
          <Col md={4}>
            <RandomNumberInRange />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <FormTest />
          </Col>
          <Col md={4}>
            <FormTest3 />
          </Col>
          <Col md={4}>
            <FormTest2 />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}></Col>
          <Col md={4}>
            <FormInput3 name="jmv" isMandatory={true} placeholder="test" />
          </Col>
          <Col md={4}>
            <Greet isLoggedIn={true} messageCount={110} name="JMV" />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}></Col>
          <Col md={4}>
            <Person name={personName} />
          </Col>
          <Col md={4}>
            <PersonList names={personNames} />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <AccordionTest />
          </Col>
          <Col md={4}>
            <BoxWithButton />
          </Col>
          <Col md={4}>
            <SimpleBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
