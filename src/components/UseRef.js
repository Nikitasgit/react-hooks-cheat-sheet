import React, { useRef, useEffect, useState } from "react";

const UseRef = () => {
  const [names, setNames] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onAddName = () => {
    setNames([...names, inputRef.current.value]);
  };
  return (
    <div>
      <div>{names && names.map((name) => <div key={name}>{name}</div>)}</div>
      <button onClick={onAddName}></button>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRef;
