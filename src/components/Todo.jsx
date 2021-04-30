import { observer } from 'mobx-react-lite'
import React from 'react'
import { InputGroup, Button } from 'react-bootstrap'
import todo from '../store/todo'





const Todo = observer(() => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {todo.todos.map(item =>
                <div key={item.id}>
                    <InputGroup.Append>
                        <InputGroup.Checkbox checked={item.completed} onChange={() => todo.completeTodo(item.id)} />
                        <InputGroup.Text>{item.title}</InputGroup.Text>
                        <Button variant="outline-danger" onClick={() => todo.removeTodo(item.id)}>Delete</Button>
                    </InputGroup.Append>
                </div>
            )
            }
        </div >
    )
})

export default Todo
