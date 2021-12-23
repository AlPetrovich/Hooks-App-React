import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading} = useFetchGifs(category);
    

    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeInTopLeft'> {category} </h3>

           {loading && <p>Loading</p>}

            <div className='card-grid'>
                    {
                        images.map(img=>(
                        <GifGridItem 
                            key ={img.id}
                            {...img}
                            />
                        ))
                    }
            
             </div>
        </>
    )
}


