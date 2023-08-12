import React, { useCallback, useMemo, useState } from "react";

const SortedList = ({ list, sortFunc }) => {
  console.log("rendered");
  const sortedList = useMemo(() => {
    console.log("rendered again");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
};

const UseMemoAndCallBack = () => {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, num) => acc + num, 0),
    [numbers]
  );
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const [count, setCount] = useState(0);
  const sortFunc = useCallback((a, b) => a.localeCompare(b), []);
  return (
    <div>
      <SortedList list={names} sortFunc={sortFunc} />
      <div>Names: {names.join(", ")}</div>
      <div>Total: {total}</div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default UseMemoAndCallBack;
