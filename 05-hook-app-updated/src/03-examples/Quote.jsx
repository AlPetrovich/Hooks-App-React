import { useState } from "react";
import { useLayoutEffect, useRef } from "react";

export const Quote = ({quote,author}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width:0,
    height:0
  })

  useLayoutEffect(() => {
   //tamaño de p 
   const {height,width} = pRef.current.getBoundingClientRect();
   
   setBoxSize({height,width})

  }, [quote])

  return (
    <div>
      <blockquote 
    className="blockquote text-right"
    style={{display:'flex'}}
    >
      <p ref={pRef} className="mb-1">{quote}</p>
      <footer className="blockquote-footer mt-2">{author}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </div>
  );
};
