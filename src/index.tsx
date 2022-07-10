/*
 * @Author: luckydog
 * @Date: 2022-01-19 00:20:20
 * @LastEditTime: 2022-02-28 21:39:11
 * @Description:
 * @FilePath: /hooks/src/index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
