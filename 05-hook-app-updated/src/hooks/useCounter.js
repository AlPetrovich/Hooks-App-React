import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  
    const [counter, setCounter] = useState(initialValue)

    const onIncrease = () => setCounter(counter + 1)
    const onDecrease = () =>{
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    const onReset = () => setCounter(initialValue)

    return {
        counter,
        onIncrease,
        onDecrease,
        onReset
    }
}

