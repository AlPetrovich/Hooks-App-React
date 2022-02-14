import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

//Sistema de rutas Principal
export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  //estado de la autenticacion cambia quiero ejecutar un prodecimiento
  useEffect(() => {
    //crea un observable, cuando cambia la aut. se dispara
    firebase.auth().onAuthStateChanged((user)=>{

      if( user?.uid ){
        dispatch( login(user.uid, user.displayName ))
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false)
      }

      setChecking(false)

    });

  }, [ dispatch , setChecking, setIsLoggedIn]);

  if( checking ){
    return(
        <h1>Espere...</h1>
    )
  }

  return (

    <Router>
        <div>
            <Switch>
                <Route 
                    path="/auth"
                    component={ AuthRouter }
                />
                <Route
                    exact
                    path="/"
                    component={ JournalScreen }
                />

                <Redirect to="/auth/login" />

            </Switch>
        </div>
    </Router>
  
  );
};
