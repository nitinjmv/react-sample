type StatusProp = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProp) => {
  console.log();

  const getStatus = (status: string) => {
    switch (status) {
      case "loading":
        status = "Loading...";
        break;
      case "success":
        status = "Success...";
        break;
      case "error":
        status = "Error...";
        break;
      default:
        status = "Undefined..";
    }
    return status;
  };

  return (
    <div>
      <h2>{getStatus(props.status)}</h2>
    </div>
  );
};
