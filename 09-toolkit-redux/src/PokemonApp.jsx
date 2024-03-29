import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  //const { value } = useSelector((state) => state.counter)
  const {page, pokemons = [], isLoading} = useSelector((state) => state.pokemons);


  useEffect(() => {
    dispatch( getPokemons() )
  }, [])
  

  return (
    <div>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False'}</span>
        <ul>
            {
              pokemons.map((item, i )=>(
                <li key={item + i}>{item.name}</li>
              ))
            }
        </ul>
        <button
          disabled={isLoading}
          onClick={ () => dispatch( getPokemons(page) ) }
        >
            Next
        </button>
    </div>
  )
}
