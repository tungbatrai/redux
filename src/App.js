/** @format */

import "./App.css";
import Filters from "./component/Filters";
import TodoList from "./component/TodoList";
import { Typography, Divider } from "antd";
import 'antd/dist/antd.css';
const { Title } = Typography;
function App() {
  return (
    <div className="App">
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
