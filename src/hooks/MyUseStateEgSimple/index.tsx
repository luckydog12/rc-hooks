import React from "react";
import ReactDOM from "react-dom";

let _state: any;

const render = () => {
  ReactDOM.render(<Index />, document.getElementById("root"));
};

const useState = <T, _>(initialValue: T) => {
  _state = _state || initialValue;
  const setState = (newState: T) => {
    _state = newState;
    render();
  };
  const res: [_state: T, setState: (newState: T) => void] = [_state, setState];
  return res;
};

const Index = () => {
  const [name, setName] = useState("luckydog");
  return (
    <>
      name: {name}
      <button onClick={() => setName("another luckydog")}>click me</button>
    </>
  );
};

export default Index;
