//import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp= ( {value = 10} ) =>{

  const [counter, setCounter]= useState(value); //[2 valores]
  

  const handleAdd=(e)=>{
    //setCounter(counter + 1)
    //si no tengo referencia o acceso al counter (1er valor)
    setCounter((counter)=>{
      return counter +1
    })
  }

  const handleReset=()=>{
    setCounter( (counter) => value)
  }

  const handleSubstract=()=>{
    setCounter( (counter) => counter - 1)
  }

  return(
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleReset }> Reset </button>
      <button onClick={ handleSubstract }> -1 </button>
    </>
  )


}

// CounterApp.propTypes={
//   value: PropTypes.number.isRequired
// }

export default CounterApp;
