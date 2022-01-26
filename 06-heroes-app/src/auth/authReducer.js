//Reducer es una funcion pura que no tiene que salirse de su funcion
//accion modifica el state, react dibuja lo que tiene que hacer

import { types } from "../types/types";

// const state = {
//     name: 'Alexis',
//     logged:true
// }

// const loginAction={
//     type: type.login,
//     payload: {
//         name: 'Alexis',
//         email: 'alex@gmail.com'
//     }
// }
//el payload solo tiene el name, el reducer agrega el log

export const authReducer = (state = {}, action) => {  //reducer
    
    switch(action.type) {  //login / logout
        case types.login:
            return {
                ...action.payload, //aca va el name , email ej arriba
                logged : true
            }

        case types.logout:
            return {
                logged : false //borra cualq prop del state y solo tenemos el log en false
            }

        default:
            return state;   
        
    }
}