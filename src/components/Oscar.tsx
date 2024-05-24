import { Card } from "react-bootstrap";

type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <Card>{props.children}</Card>;
};
