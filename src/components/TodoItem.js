import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { deleteTodo } from '../features/todoSlice'
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField} from '@mui/material'

function TodoItem({ name,id,done}) {
  const [todoName,setTodoName] = React.useState(name)
  const [inputName,setInputName] = React.useState(todoName)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch=useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))

    }
    const handleDelete = () => {
      
        dispatch(deleteTodo(id))
    }
    const handleChange = () =>{
      setTodoName(inputName)
      handleClose()
    }
  return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            color='primary'
            onChange={handleCheck}
            inputProps={{ 'aria-label':'checkbox'}}
        />
        <p className={done ? 'todoItem--done':'none'}>{todoName}</p>
        <IconButton onClick={handleClickOpen}>
          <EditIcon/>
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            value={inputName}
            fullWidth
            variant="standard"
            onChange={(e)=>{ 
              setInputName(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TodoItem