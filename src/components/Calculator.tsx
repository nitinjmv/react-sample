export const Calculator = () => {
  let buttonList: any = [];
  for (let i = 0; i < 10; i++) {
    buttonList.push(<button>{i}</button>);
  }

  return (
    <>
      <h2>Calculator</h2>
      <input />
      <br />
      {buttonList}
    </>
  );
};
function handleClick(i: number) {
  console.log(i);
}
