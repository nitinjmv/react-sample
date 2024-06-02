import { Card } from "react-bootstrap";

type GreetProps = {
  name: string;
  isLoggedIn: boolean;
  messageCount: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <Card>
      {props.isLoggedIn
        ? `Welcome ${props.name}! you have ${props.messageCount} unread message.`
        : `Welcome Guest`}
    </Card>
  );
};
