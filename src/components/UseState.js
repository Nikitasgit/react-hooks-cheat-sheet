import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const addOne = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
};

const NameList = () => {
  const [list, setList] = useState(["Jack", "John", "Tom"]);
  const [name, setName] = useState("");
  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };
  return (
    <div>
      <h2>useState</h2>
      <ul>
        {list.map((name) => (
          <li key={name}>{name} </li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={onAddName}>Add Name</button>
    </div>
  );
};

const UseState = () => {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
};

export default UseState;
