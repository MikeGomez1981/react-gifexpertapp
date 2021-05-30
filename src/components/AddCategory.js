
import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState( '');

    const handleInputChange = (e) => {
          
            setInputValue(e.target.value )
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2 ){
            setCategories(categorias => [ inputValue, ...categorias]); //video 72, en el video 77 se explica como despues de 
                                                                      //mostrar los gifs que pongamos en el input, se muestre 
                                                                      //1º el que solicitemos y despues el que habia
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
           <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange}
           />
        </form>
    )
}
AddCategory.propTypes = { setCategories: PropTypes.func.isRequired }