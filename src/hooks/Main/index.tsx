import React from "react";
import ReactDOM from "react-dom";

let memoizedState: any = []; // 存放hooks
let cursor = 0; // 当前memoizedState下标

const render = () => {
  ReactDOM.render(<Index />, document.getElementById("root"));
  cursor = 0;
};

const testuseState = <T, _>(initialValue: T) => {
  memoizedState[cursor] = memoizedState[cursor] || initialValue;
  const currentCursor = cursor;
  const setState = (newState: T) => {
    memoizedState[currentCursor] = newState;
    render();
  };
  return [memoizedState[cursor++], setState];
};

const testuseEffect = (cb: any, depArr?: any[]) => {
  const hasNoDeps = !depArr;
  const deps = memoizedState[cursor];
  const hasChangedDeps = deps
    ? !depArr?.every((el, idx) => el === deps[idx])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    cb();
    memoizedState[cursor] = depArr;
  }
  cursor++;
};
let firstRender = true;
const Index = () => {
  let init;
  if (firstRender) {
    [init] = testuseState("a");
    firstRender = false;
  }
  const [a, setA] = testuseState(init);
  const [b, setB] = testuseState("b");
  const [c, setC] = testuseState("c");

  // useEffect(() => {
  //   console.log("useEffect no deps");
  // });
  // useEffect(() => {
  //   console.log("useEffect deps []");
  // }, []);

  console.log(memoizedState, cursor);
  return (
    <div>
      a: {a}
      <button onClick={() => setA("aa")}>click me to set a</button>
      <br />
      b: {b}
      <button onClick={() => setB("bb")}>click me to set b</button>
      <br />
      c: {c}
      <button onClick={() => setC("cc")}>click me to set c</button>
    </div>
  );
};

export default Index;
