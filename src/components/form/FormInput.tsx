import { Card } from "react-bootstrap";

type FormFields = {
  lable?: string;
  placeholder: string;
  name: string;
  isMandatory?: boolean | false;
};
export const FormInput = (props: FormFields) => {
  return (
    <Card>
      <input name={props.name} placeholder={props.placeholder} />
      {props.isMandatory ? "*" : ""}
    </Card>
  );
};
