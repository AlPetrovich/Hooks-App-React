import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'


export const CounterWithCustomHook = () => {


    const {state, increment, decrement, reset} =useCounter(100);

    return (
        <div>
            <h1>Counter With CustomHook: {state}</h1>
            <hr></hr>

            <button onClick={()=> increment(3)} className='btn'>+1</button>
            <button onClick={decrement} className='btn'>-1</button>
            <button onClick={reset} className='btn'>r</button>
        </div>
    )
}
