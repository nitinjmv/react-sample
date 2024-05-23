import { useState } from "react";

export const ButtonTest = () => {
  const [data, setText] = useState(null);

  return (
    <div>
      <button onClick={() => setText}>Like</button>
    </div>
  );
};
