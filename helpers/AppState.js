import React, { useState, createContext, useReducer, useEffect } from "react";
import CartReducer from './CartReducer'

const iniState = {
    count: 0,
    product: []
    
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