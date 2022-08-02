import { useTodo } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const {todos,todosCount, todosPending, handleNewTodo ,handleDeleteTodo, handleToggleTodo}= useTodo();

  return (
    <div>
        <h1>Todo App:{ todosCount }, <small>pendientes : {todosPending}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                <TodoList
                todos = {todos} 
                onDeleteTodo={ handleDeleteTodo }
                onToggleTodo={ handleToggleTodo }
                />

            </div>
            <div className="col-5">
                <h4>Agregar todo</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </div>

  )
}
