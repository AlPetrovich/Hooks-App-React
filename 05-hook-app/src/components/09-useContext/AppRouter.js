import React from 'react'
import {
    BrowserRouter as Router,
    Switch as Routes,
    Route,
    Redirect,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
          <div>

            <NavBar/>

            <div className='container'>
                <Routes>
                    
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen }/>
                    <Route exact path="/" component={ HomeScreen }/>

                    <Redirect to='/' />

                </Routes>
            </div>

            

          </div>
        </Router>
      );
}
