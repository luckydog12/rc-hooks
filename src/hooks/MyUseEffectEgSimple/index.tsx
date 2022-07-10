// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";

// 记录useEffect上一次的依赖
let _deps;

const useEffect = (cb, depArr) => {
  // 依赖不存在
  const hasNoDeps = !depArr;
  // 依赖存在 判断是否有变化
  const hasChangedDeps = _deps
    ? !depArr.every((el, idx) => el === _deps[idx])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    cb();
    _deps = depArr;
  }
};

const Index = () => {
  let name = "luckydog";
  useEffect(() => {
    name = "another luckydog";
  }, []);
  return <>name: {name}</>;
};

export default Index;
