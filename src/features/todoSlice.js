import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload)
            return state
        },
        setCheck:(state,action)=>{
            state.todoList.map(item => {
                if(action.payload === item.id){
                    if(item.done === true){
                        item.done = false
                    }
                    else{
                        item.done = true
                    }
                }
            })
        },
        deleteTodo:(state,action)=>{
            let index = state.todoList.findIndex((ele) => ele.id === action.payload);
            if(index !== -1) {
                let list= [...state.todoList]
                list.splice(index,1);
                const todoList = Object.assign({}, state, { todoList: list })
                return todoList;
            }
        },
        

  }
});

export const { saveTodo,setCheck,deleteTodo,editTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer