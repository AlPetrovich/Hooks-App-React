import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff =(iterationNumber=100)=>{
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const{counter, onIncrease} = useCounter(1000);
    const [show, setShow] = useState(true);

    //memoriza un valor
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
        <h1>Counter: <small>{counter}</small></h1>
        <hr></hr>

        <h4>{ memorizedValue }</h4>

        <button className='btn btn-primary' onClick={onIncrease}>
            +1
        </button>
        <button 
        className='btn btn-outline-primary' 
        onClick={ ()=> setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}