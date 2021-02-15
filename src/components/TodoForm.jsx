import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core'

const LOCAL_STORAGE_KEY = 'todo-lists'

function TodoForm() {

    const [todos, setTodos] = useState([])

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    })

    // todos functionalities
    const addTodo = (i) => {
        setTodos([...todos, i])
    }
    
    const completeTask = id => {
        setTodos(todos.map(i => {
            if (i.id === id) {
                return {...i, completed: !i.completed}
            }
            return i
        }))
    }

    const removeTask = id => {
        setTodos(todos.filter(i => i.id !== id))
    }

    //functions
    const inputChange = e => {
        setTodo({...todo, task: e.target.value})
    }

    const submitTask = e => {
        e.preventDefault()
        if (todo.task.trim())
            addTodo({ ...todo, id: uuidv4() })
        //reset task
            setTodo({...todo, task: ''})
    }

     //useEffect
     useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storageTodos) {
            setTodos(storageTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(todos))
    }, [todos])
    
    return (
        <div className='todo-form' >
            <form onSubmit={submitTask} action="">
                <div className='input-button'>
                    <TextField style={{color: 'white'}} label={`Bae's Todos`} onChange={inputChange} value={todo.task} type="text" placeholder='eg. teach George' />
                    <Button type='submit' style={{fontWeight: 'bolder'}}  >Add</Button>
                </div>
            </form>
            <TodoList removeTask={removeTask} todos={todos} completeTask={completeTask} />
        </div>
    )
}

export default TodoForm
