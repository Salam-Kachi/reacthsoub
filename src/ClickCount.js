import React, { useState } from "react";

const ClickCount = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>لقد نقرتني {counter} مرات</p>
      <button onClick={() => setCounter(counter + 1)}>انقرني</button>
    </div>
  );
};

export default ClickCount;
