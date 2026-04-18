import React, { useState, useEffect } from "react";

const ClickCount = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter === 5) {
      alert("لقد نقرتني 5 مرات");
      setCounter(0);
    }
  }, [counter]);
  return (
    <div>
      <p>لقد نقرتني {counter} مرات</p>
      <button onClick={() => setCounter(counter + 1)}>انقرني</button>
    </div>
  );
};

export default ClickCount;
