import { Separator } from "./components/others/Separator";
import { HideDisplay } from "./components/others/HideDisplay";
import { RandomNumber } from "./components/others/RandomNumber";
import RandomNumberInRange from "./components/others/RandomNumberInRange";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FormTest } from "./components/form/FormTest";
import { FormTest3 } from "./components/form/FormTest3";
import { FormTest2 } from "./components/form/FormTest2";
import { Greet } from "./components/others/Greet";
import { Person } from "./components/others/Person";
import { PersonList } from "./components/others/PersonList";
import { SimpleBox } from "./components/others/SimpleBox";
import { BoxWithButton } from "./components/others/BoxWithButton";
import { AddEmployee } from "./components/employee/AddEmployee";
import { EmployeeList } from "./components/employee/EmployeeList";
import { EmployeeCount } from "./components/employee/EmployeeCount";
import { AccordionTest } from "./components/others/AccordionTest";
import { FormInput3 } from "./components/form/FormInput3";
import { FormInput } from "./components/form/FormInput";
import { SubmitForm } from "./components/form/SubmitForm";
import { Counter } from "./components/others/Counter";
import { Calculator } from "./components/others/Calculator";
import { FormValidation } from "./components/others/FormValidation.1";
import { Product } from "./components/generics/product";
import { PassFunctionAsProp } from "./components/others/PassFunctionAsProp";

function App() {
  const personName = {
    first: "Nitin",
    last: "JMV",
  };

  const personNames = [
    { first: "john", last: "doe" },
    { first: "ram", last: "ram" },
    { first: "Jas", last: "singh" },
  ];

  return (
    <div>
      <Container className="bg-dark">
        <Row className="row gy-5">
          <Col md={4}>
            <FormValidation />
          </Col>
          <Col md={4}>
            <Product />
          </Col>
          <Col md={4}>
            <PassFunctionAsProp />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <Counter />
          </Col>
          <Col md={4}>
            <Calculator />
          </Col>
          <Col md={4}>
            <SimpleBox />
          </Col>
        </Row>

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
            <FormInput name="JMV" placeholder="test" isMandatory={true} />
          </Col>
          <Col md={4}>
            <FormInput3 name="jmv" isMandatory={true} placeholder="test" />
          </Col>
          <Col md={4}>
            <FormTest />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <FormTest2 />
          </Col>
          <Col md={4}>
            <FormTest3 />
          </Col>
          <Col md={4}>
            <SubmitForm />
          </Col>
        </Row>

        <Row className="row gy-5">
          <Col md={4}>
            <Greet isLoggedIn={true} messageCount={110} name="JMV" />
          </Col>
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
