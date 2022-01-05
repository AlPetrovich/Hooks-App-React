import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
//https://www.breakingbadapi.com/api/quotes/1

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const {loading , data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0] //(!loading && loading.length>1) && data[0]
    
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr></hr>

            {
                loading
                ?
                    (<div className='alert alert-info text-center'>
                    Loading...
                    </div>)
                :
                    (<blockquote className='blockquote text-right'>
                    <p className='mb-0'>{ quote }</p>
                    <footer className='blockquote-footer mt-5'>{ author }</footer>
                    </blockquote>)
            }

            <button onClick={increment} className='btn btn-primary'>Next quote</button>

        </div>
    )
}
