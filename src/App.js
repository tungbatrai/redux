/** @format */

import "./App.css";
import Filters from "./component/Filters";
import TodoList from "./component/TodoList";
import { Typography, Divider } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
const { Title } = Typography;
function App() {
  /*const test = (a) => (b) => {
    return a + b;
  };*/
  // const test = (a, b) => {
  //   return a + b;
  // };
  // const handleclick = () => {
  //   //console.log(test(1)(2));
  //   console.log(test(1, 2));
  // };
  return (
    <div className="App">
      {/* <div onClick={()=> handleclick()}>
        <button>click</button>
      </div> */}
      <div
        style={{
          width: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "90vh",
        }}
      >
        <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
