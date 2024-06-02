import { Card } from "react-bootstrap";

type FieldProperties = {
  name: string;
  placeholder: string;
  isMandatory?: boolean | false;
  lable?: string;
};

export const FormInput3 = (props: FieldProperties) => {
  return (
    <Card>
      <input placeholder={props.placeholder} name={props.name} />
      {props.isMandatory ? "*" : ""}
    </Card>
  );
};
