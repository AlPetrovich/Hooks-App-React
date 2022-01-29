import { types } from "../types/types";

//State vacio cuando no este autenticado
//si estoy autenticado tengo esto
/*  {
        uid: lsdkj12jkd,
        name: "Alexis"
    }
*/
//Reducer de la autenticacion
export const authReducer = (state = {}, action) =>{

    switch (action.type) {

        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}
          
    
        default:
            return state;
    }
}