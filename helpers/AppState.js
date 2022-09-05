import React, { useState, createContext, useReducer, useEffect } from "react";
import CartReducer from './CartReducer'
import Product from '../pages/api/products.json'

const iniState = {
    products: Product.products,
    cart : []
    
}



export const AppContext = createContext()

export const ContextProvider = (props) =>{
    
    
    const [state, dispatch] = useReducer(CartReducer, iniState)
   
    return(
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}