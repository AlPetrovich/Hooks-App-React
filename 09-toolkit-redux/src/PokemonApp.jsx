import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemos } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemos() )
  }, [])
  

  return (
    <div>
        <h1>Pokemon App</h1>
        <hr />

        <ul>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
        </ul>
    </div>
  )
}
