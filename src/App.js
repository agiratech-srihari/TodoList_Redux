import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const todoList = [
  { item: "Working on Todo", done: false, id: 1 },
  { item: "Learned About Redux", done: true, id: 2 },
];

function App() {
  const todoList = useSelector(selectTodoList);
  const [list, setList] = useState(todoList);
  const [type, setType] = useState(1);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    if(type == 2){
      const comList = [];
      todoList.filter(item => {
        if(item.done == true){
          comList.push(item)
        }
        console.log('from filter 2 ',comList)
        setList(comList)
      })
    }
    if (type == 3){
      const incomList = []
      todoList.filter(item => {
        if(item.done == false){
          incomList.push(item)
        }
        console.log('from filter 3',incomList)
        setList(incomList)
      })
    }
    if (type == 1){
      setList(todoList)
    }
  },[type,todoList]);
  return (
    <div className="App">
      <div className="app__container">
        <div className="heading" style={{marginBottom:'1rem'}}>
          <h3>Todo List</h3>
        </div>
        <div className="app__inputContainer">
          <Input />
          <Select
            style={{
              height: "45px",
              width: "8rem",
              outline: "none",
              backgroundColor: "rgb(214, 213, 213)",
              borderRadius: "10px",
              marginLeft: ".5rem",
              marginTop:'.2rem'
            }}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value={1}>All</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
            <MenuItem value={3}>Incompleted</MenuItem>
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
