import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo } from '../features/todoSlice'

function TodoItem({ name,id,done}) {
    const dispatch=useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))

    }
    const handleDelete = () => {
      alert(id)
        dispatch(deleteTodo(id))
    }

  return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            color='primary'
            onChange={handleCheck}
            inputProps={{ 'aria-label':'checkbox'}}
        />
        <p className={done ? 'todoItem--done':'none'}>{name}</p>
        <IconButton onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
    </div>
  )
}

export default TodoItem