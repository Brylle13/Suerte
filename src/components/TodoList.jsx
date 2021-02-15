import React from 'react'
import Todo from './Todo'
import {List} from '@material-ui/core'

function TodoList({todos, completeTask, removeTask}) {
    return (
        <div>
            <List>
                {todos.map(i => <Todo removeTask={removeTask} completeTask={completeTask} i={i} key={i.id} />)}
            </List>
        </div>
    )
}

export default TodoList
