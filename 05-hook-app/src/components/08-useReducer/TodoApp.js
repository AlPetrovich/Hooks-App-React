import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./styles.css";

const init = () => {
  //si hay toDos lo devuelvo como arrays si no existe devuelvo array vacio
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //lo que retorne init es el initialState
  const [todos, dispatch] = useReducer(todoReducer, [], init); //initialState por defecto es un arreglo vacio

  //localStorage solo guarda strings NO objeto
    //cambia toDo y ejecuta esta logica constantemente
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = ( newTodo )=>{

    dispatch({
        type: 'add',
        payload: newTodo
    })
  }


  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr></hr>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
