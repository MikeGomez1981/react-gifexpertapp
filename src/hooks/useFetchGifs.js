
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
   
    const [state, setstate] = useState( {
        data:[],
        loading: true
    });

    useEffect( () =>{
        
    getGifs( category )
        .then( imagenes => {
          
                setstate({
                    data :imagenes,
                    loading: false
                });
  
        })
    }, [category])
return state;

}