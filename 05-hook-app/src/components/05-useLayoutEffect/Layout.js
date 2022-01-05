import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0] //(!loading && loading.length>1) && data[0]

    const pTag = useRef()
    
    useLayoutEffect(()=>{

        console.log(pTag.current.getBoundingClientRect())

    },[quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>

            <blockquote className='blockquote text-right'>
            <p ref={ pTag } className='mb-0'>{ quote }</p>
            </blockquote>

            <button onClick={increment} className='btn btn-primary'>Next quote</button>
        </div>
    )
}
