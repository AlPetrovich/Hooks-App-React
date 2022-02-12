import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from "./ui";

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
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user})=>{
                dispatch( login(user.uid, user.displayName ));

                dispatch(finishLoading() );
            })
            .catch(e =>{
                console.log(e);
                dispatch(finishLoading() );
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    //tarea asincrona
    return (dispatch) =>{
        //autentica inmediatamente se crea el usuario y logea en firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) =>{
                //esperar que se haga la actualizacion
                await user.updateProfile({ displayName: name }); //displayname de user sera igual al argumento de mi func
                
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

