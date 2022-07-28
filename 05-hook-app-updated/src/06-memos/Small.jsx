//useMemo solo cuando hay depreciacion considerable
//Memoriza este componente
//import { memo } from "react"
import React from "react"
//solo cuando los properties cambian se volvera a ejecutar
export const Small = React.memo(({value}) => {

    
    console.log("me volvi a llamar F :c")

  return (
    <small>{value}</small>
  )
})
