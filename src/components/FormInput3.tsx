type FieldProperties = {
  name: string;
  placeholder: string;
  isMandatory?: boolean | false;
  lable?: string;
};

export const FormInput3 = (props: FieldProperties) => {
  return (
    <div>
      <input placeholder={props.placeholder} name={props.name} />
      {props.isMandatory ? "*" : ""}
    </div>
  );
};
