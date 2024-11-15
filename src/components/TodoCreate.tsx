import React, { useState } from 'react'
import '../css/Todo.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import Todo from './Todo'




function TodoCreate() {

    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')
    const handleCreateTodo = () => {
        if (newTodo.length == 0) {
            alert("Todo giriniz!")
            return;
        }
        else {
            const payload = {
                id: Math.floor(Math.random() * 99999999),
                content: newTodo
            }
            dispatch(createTodo(payload))
            setNewTodo('')


        }
    }

    return (
        <div className='todo-create'>
            <input value={newTodo} type="text" className='todo-input' placeholder='Todo Giriniz...' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
            <button onClick={handleCreateTodo} className='todo-btn'>Oluştur</button>

        </div>
    )
}

export default TodoCreate
