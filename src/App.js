import React from 'react'
import TodoForm from './components/TodoForm'
import Typography from '@material-ui/core/Typography'
import '../src/components/styles/App.css'



function App() {

    return (
        <div className='App'>
            <Typography style={{padding: 16}} variant='h3'> 
                Suerte's Todos.
            </Typography>
            <TodoForm />
        </div>
    )
}

export default App
