import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp =()=>{

    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd =() =>{
    //     //usando operador express
    //     //setCategories(['Hunter', ...categories])
    //    setCategories(categories => [...categories, 'Hunter']) //El primer arg es el valor del estado anterior y luego regresa el nuevo state
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;