import { useState } from "react"
import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      const onFace =()=>{
        console.log(':D');
      }
      window.addEventListener('mousemove', onFace);
    
      return () => {
        window.removeEventListener('mousemove', onFace);
      }
    }, [])
    
  return (
    <div>
        <h1>Usuario ya existe</h1>
        <hr></hr>

    </div>
  )
}
