import React from 'react'
import { useForm } from '../hooks/useForm';

//HOOK FORM -> REACT-HOOK-FORM ver libreria

export const FormWithCustomHook = () => {

    const {formState, onResetForm, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    //useForm envio desestructurado el objeto formState
    //const {username, email, password} = formState;
    
  return (
    <div>
        <h1>Formulario with custom hook</h1>
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
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    
    </div>
  )
}
