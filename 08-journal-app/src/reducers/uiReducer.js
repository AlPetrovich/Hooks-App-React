import { types } from "../types/types";

const initialState={
    loading: false,
    msgError: null
}

//ui
export const uiReducer=(state = initialState, action)=>{

    switch (action.type) {
        case types.uiSetError:
            return{
                ...state, //loading false
                msgError: action.payload
            }

        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            }    
    
        default:
            return state; 
    }
}