import React, { useEffect, useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const update = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCounter(counter + 1);
    };
    update();
  }, [counter]);

  return <div>{counter}</div>;
};

export default Test;
