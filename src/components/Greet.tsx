type GreetProps = {
  name: string;
  isLoggedIn: boolean;
  messageCount: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}! you have ${props.messageCount} unread message.`
        : `Welcome Guest`}
    </div>
  );
};
