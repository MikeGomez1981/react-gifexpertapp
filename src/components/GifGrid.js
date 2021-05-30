
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
   
   const { data: images, loading } = useFetchGifs(category);
   
     /* De esta manera mostramos el nombre con el ID como key. Aparte hacemos 
           desestruturación ({ id, title }) para no tener que poner, por ejp: images.id */
return (
<>
<h3>{ category }</h3>
    {loading && <p>Loading...</p>}
     
    <div className="card-grid">      
        {                                 
          images.map( img => (
          <GifGridItem 
              key={ img.id }
              { ...img } // enviamos cada propiedad de las imgenes como propiedades independientes
            //img={ img }
              />
          ))
      }
</div>
</>
)
}






