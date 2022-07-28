import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples";


export const Layout = () => {

    const {counter,onIncrease} = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const {data, isLoading, hasError} = useFetch(url)
    // !!data && data[0]
    const {author, quote} = isLoading ? {} : data[0];
  
  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading 
                ?
                    <LoadingQuote />
                :
                    <Quote quote={quote} author={author}/>
        }

        <button disabled={isLoading} onClick={onIncrease} className="btn btn-primary">
            Next quote
        </button>

    </div>
  )
}
