import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

    
  return (
    <div>
      <li key={todo.id} className="list-group-item">
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleToggle(todo.id)}
        >
          {index + 1}.{todo.desc}
        </p>
        <button
          onClick={() => handleDelete(todo.id)} //necesito un argumento por eso func=>
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </div>
  );
};
