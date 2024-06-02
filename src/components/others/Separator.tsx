type SeparatorProps = {
  component: string;
  display: boolean;
};
export const Separator = (props: SeparatorProps) => {
  return (
    <div className="container">
      <hr />
      {props.display ? props.component : ""}
      <hr />
      <br />
    </div>
  );
};
