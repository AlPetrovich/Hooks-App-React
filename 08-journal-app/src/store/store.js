import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//puedo cargar muchos reducers, estructura del store
const reducers = combineReducers({
    auth: authReducer
})

//solo recibe 1 reducer por parametro, thunk
export const store = createStore(
    reducers,
    //config para trabajar acciones asincronas
     composeEnhancers(
         applyMiddleware(thunk)
     )
    
);