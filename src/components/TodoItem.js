import { Checkbox } from '@mui/material'
import React from 'react'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

function TodoItem({ name,id,done}) {
    const dispatch=useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))

    }

  return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            color='primary'
            onChange={handleCheck}
            inputProps={{ 'aria-label':'checkbox'}}
        />
        <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem