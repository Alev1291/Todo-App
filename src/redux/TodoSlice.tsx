import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'
import Todo from '../components/Todo'



const initialState: TodoInitialState = {
    todos: [],
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, actions: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, actions.payload]

        }, removeTodoById: (state: TodoInitialState, actions: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((Todo: TodoType) => Todo.id !== actions.payload)]
        },
        updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    },
})

// Action creators are generated for each case reducer function
export const { createTodo, removeTodoById, updateTodoById } = TodoSlice.actions

export default TodoSlice.reducer