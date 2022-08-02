

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) =>{

    if(action.type === 'ADD Todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}];

const addTodoAction = {
    type : 'ADD Todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
