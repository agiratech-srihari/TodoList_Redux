import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function App() {
  const todoList = useSelector(selectTodoList);
  const [list, setList] = useState(todoList);
  const [type, setType] = useState(1);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    console.log("todoList", todoList);
    if (type === 2) {
      const comList = todoList.filter((item) => {
        if (item.done === true) {
          // comList.push(item);
          return item;
        }
      });
      setList(comList);
    }
    if (type === 3) {
      // const incomList = [];
      const incomeList = todoList.filter((item) => {
        if (item.done === false) {
          // incomList.push(item);
          return item;
        }
      });
      setList(incomeList);
    }
    if (type === 1) {
      setList(todoList);
    }
  }, [type,todoList]);

  return (
    <div className="App">
      <div className="app__container">
        <div className="heading" style={{ marginBottom: "1rem" }}>
          <h3>Todo List</h3>
        </div>
        <div className="app__inputContainer">
          <Input />
          <Select
            
            style={{
              height: "2.7rem",
              width: "25%",
              outline: "none",
              backgroundColor: "rgb(214, 213, 213)",
              borderRadius: "10px",
              marginLeft: ".5rem",
              marginTop: ".2rem",
            }}
            labelId="demo-simple-select-filled-label"
            id="select_type"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value={1}>All</MenuItem>
            <MenuItem value={3}>Active</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Select>
        </div>
        <div className="app__todoContainer">
          {list.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
