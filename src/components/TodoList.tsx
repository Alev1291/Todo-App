import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState, store } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))
            }

        </div>
    )
}

export default TodoList
