import { Card } from "react-bootstrap";

type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <Card>
      <h3>{props.children}</h3>
    </Card>
  );
};
