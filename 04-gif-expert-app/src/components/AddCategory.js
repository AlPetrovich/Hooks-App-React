import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory= ({setCategories}) =>{

    const [InputValue, setInputValue] = useState(''); //si use no tiene nada es undefined entonces se pone como string vacio

    const handleInputChange= ( evento )=>{
        //console.log(evento.target.value);
        setInputValue(evento.target.value);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if( InputValue.trim().length>2){
            setCategories(cats => [...cats, InputValue]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input

            type="text"
            value={InputValue}
            onChange={handleInputChange}>

            </input>
        </form>
    )

}
//propiedad de la linea 4 es requerida
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}