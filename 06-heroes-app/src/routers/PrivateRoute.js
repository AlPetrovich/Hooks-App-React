import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


//todos los elementos hijos pasan como una property llamada children
//children es como un arreglo de componentes
export const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthContext);

    const {pathname, search} =useLocation();
    
    localStorage.setItem('lastPath', pathname.concat(search));
    

    return user.logged ? children : <Navigate to="/"></Navigate>
}