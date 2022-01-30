import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const login = (uid, displayName) =>{
    return {
        type : types.login,
        payload: {
            uid,
            displayName
        }
    }
}



export const startLoginEmailPassword=(email,password)=>{
    return (dispatch)=>{

        setTimeout(() => {
            dispatch( login(123,'pedro'))
        }, 3500);

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return (dispatch) =>{
        //autentica inmediatamente se crea el usuario
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) =>{
                
                await user.updateProfile({ displayName: name });
                
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e =>{
                console.log(e)
            })
    }
}

export const startGoogleLogin=()=>{
    //tarea asincrona
    return (dispatch) =>{

        firebase.auth().signInWithPopup( googleAuthProvider )  //pide provider, config firebase, return promise
            .then( ({ user }) =>{
                dispatch(
                    login( user.uid, user.displayName )
                )
            });
    }
    
}

