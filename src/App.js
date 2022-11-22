
import React from "react";

import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
const todoList = [
  { item: "Working on Todo", done: false, id: 1 },
  { item: "Learned About Redux", done: true, id: 2 },

];

function App() {
    const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className="app__container">
        <Input />
        <div className="app__todoContainer">
          {
            todoList.map(item => (
             <TodoItem 
             name={item.item}
             done={item.done}
             id={item.id}
             key={item.id}
             />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
