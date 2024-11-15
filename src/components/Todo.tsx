import React, { useState } from 'react'
import todoCss from '../css/Todo.css'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';

interface todoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoType) {

    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const handleUpdateTodo = () => {
        const payload = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodoById(payload))
        setEditable(false);
    }
    return (
        <div className='todo-div' >

            {editable ? <input type='text' className='todo-inp'
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content} </div>}
            <div>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='todo-icons' />
                {editable ? <FaCheck onClick={handleUpdateTodo} /> : <CiEdit onClick={() => setEditable(true)} className='todo-icons' />}

            </div>
        </div>
    )
}

export default Todo
