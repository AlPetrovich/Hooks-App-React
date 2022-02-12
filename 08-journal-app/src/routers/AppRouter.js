import React, { useEffect } from 'react';
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
  //estado de la autenticacion cambia quiero ejecutar un prodecimiento
  useEffect(() => {
    //crea un observable, cuando cambia la aut. se dispara
    firebase.auth().onAuthStateChanged((user)=>{

      if( user?.uid ){
        dispatch( login(user.uid, user.displayName ))
      }

    });

  }, [ dispatch ]);
  


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
