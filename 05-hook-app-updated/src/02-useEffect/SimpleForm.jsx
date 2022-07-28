import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'alexis',
        email:'alexis@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange=(event)=>{
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
    }


    useEffect(() => {
        
      return () => {
      }
    }, [])
    
    

  return (
    <div>
        <h1>Formulario simple</h1>
        <hr></hr>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="alexis@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
            username === 'alexis' && <Message />
        }

    </div>
  )
}
