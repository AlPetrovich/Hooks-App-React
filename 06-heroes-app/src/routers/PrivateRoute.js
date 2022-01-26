import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


//todos los elementos hijos pasan como una property llamada children
//children es como un arreglo de componentes
export const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthContext);

    return user.logged ? children : <Navigate to="/login"></Navigate>
}