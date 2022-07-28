import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const {counter , onIncrease, onDecrease, onReset} = useCounter();

  return (
    <div>
         <h1>Counter with hook</h1>
         <h3>counter : {counter}</h3>
        <hr></hr>
        <button className="btn btn-primary" onClick={onIncrease}>+1</button>
        <button className="btn btn-primary" onClick={onReset}>Reset</button>
        <button className="btn btn-primary" onClick={onDecrease}>-1</button>
    </div>
  )
}
