import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../09-useReducer/todoReducer";


const init =()=>{
    return JSON.parse( localStorage.getItem('todos')) || [];
 }

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        //guardar todo en localStorage
          localStorage.setItem('todos', JSON.stringify( todos ))
      }, [todos])

    const handleNewTodo = (todo)=>{
        const action ={
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id)=>{
        dispatch({
            type : '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id)=>{
        dispatch({
            type : '[TODO] Toggle Todo',
            payload: id
        })
    }

    //todos count
    const todosCount = todos.length;
    //todos pending
    const todosPending = todos.filter(todo => !todo.done).length;

  return{
    todos,todosCount, todosPending, handleNewTodo, handleDeleteTodo, handleToggleTodo
  }
}

