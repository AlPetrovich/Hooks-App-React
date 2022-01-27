import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';


//solo usuarios no autenticados puedan ver el login
export const PublicRoute = ({children}) => {

    const { user } = useContext(AuthContext)    
    //si el usuario esta aut lo saco de ahi sino muestro sus hijos
  return user.logger ? <Navigate to="/marvel" /> : children
};
