import { Card } from "react-bootstrap";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <Card>
      {props.name.last} {props.name.first}
    </Card>
  );
};
