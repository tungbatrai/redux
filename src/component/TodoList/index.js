/** @format */

import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
import { addTodo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { searchTextSelector, todoListSelector } from "../../redux/selectors";
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  //const todoList = useSelector((state)=> state.todoList)
  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchTextSelector) 
  console.log(todoList);
  const handleadd = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: true,
      })
    );
    setTodoName('')
    setPriority('Medium')
  }; 
  console.log("searchText",searchText);
  const handleInputChange = (e) => {
   
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    // console.log(value);
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
         */}

        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={(e) => handleInputChange(e)} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={() => handleadd()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
