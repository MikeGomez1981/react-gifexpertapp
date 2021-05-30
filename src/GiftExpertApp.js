
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['american gods'/*, 'misfits', 'falling water' */])

    //const handleAdd = () => {
      //  setCategories ([ ... categories,'it']); }
   return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        category = { category }
                        key = { category }
                        />
                    ))
                }
            </ol>
            
        </>
    )
}
