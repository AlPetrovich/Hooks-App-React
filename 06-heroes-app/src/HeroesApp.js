import {useEffect, useReducer} from 'react';
import {AuthContext} from "./auth/authContext";
import {authReducer} from './auth/authReducer'
import { AppRouter } from "./routers/AppRouter";

//fuera del reducer para que se ejecute 1 vez
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {
  //1-reducer(referencia) - estado inicial - init(inicializar este reducer)
  const [user , dispatch ] = useReducer( authReducer, {} , init );

  //Grabar el usuario en el localStorage
  useEffect(() => {
    if( !user ) return; //si no existe no hace nada
    localStorage.setItem('user', JSON.stringify(user)); //si existe lo graba
  }, [user]);
  
  //Provider debe mandar un value a sus hijos
  return (
        <AuthContext.Provider value={{
          user,
          dispatch
        }}>
          {/* Hijos nietos bisnietos pueden obtener el value */}
            <AppRouter /> 
        </AuthContext.Provider>

    );
};

