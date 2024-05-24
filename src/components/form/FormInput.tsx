type FormFields = {
  lable?: string;
  placeholder: string;
  name: string;
  isMandatory?: boolean | false;
  refer: any;
};
export const FormInput = (props: FormFields) => {
  return (
    <div>
      <input
        name={props.name}
        placeholder={props.placeholder}
        ref={props.refer}
      />
      {props.isMandatory ? "*" : ""}
    </div>
  );
};
