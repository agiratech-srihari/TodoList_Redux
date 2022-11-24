import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import AddIcon from '@mui/icons-material/Add';
import swal from 'sweetalert';
import IconButton from "@mui/material/IconButton";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`adding ${input}`);
    if(input.trim()===""){
      swal("enter some work to add in Todo List");
    }else{
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
        );
        setInput("");
      }
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton
        style={{
          width: "2rem",
          border: "1px solid rgb(143, 143, 143)",
          height: "2rem",
          backgroundColor: "rgb(214, 213, 213)",
          marginRight: ".5rem",
          borderRadius: "50",
        }}
        onClick={addTodo}
      >
        <AddIcon style={{ color: "black" }} />
      </IconButton>
    </div>
  );
}

export default Input;
