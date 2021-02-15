import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';


function Todo({ i, removeTask, completeTask }) {
    const taskDone = () => {
        completeTask(i.id)
    }

    const deleteTask = () => { 
        removeTask(i.id)
    }

    return (
        <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
           
            <Typography variant='body1' style={{ textDecoration: i.completed ? 'line-through' : null }}>{i.task}</Typography>
            <div style={{marginLeft: '50px'}}>
            <Checkbox style={{color: i.completed ? '#f8f8f8' : null}} checked={i.completed} onClick={taskDone}/>
            <IconButton className='delete' onClick={deleteTask}>
                <DeleteIcon />
                </IconButton>
            </div>
        </ListItem>
    )
}

export default Todo
