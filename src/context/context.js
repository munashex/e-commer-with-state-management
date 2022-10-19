import React, {createContext, useContext, useReducer} from 'react'  
import products from '../data/products' 
import {CartReducer} from './reducer'

const CartContext = createContext()  



const CartContainer = ({children}) => { 


    const [state, dispatch] = useReducer(CartReducer, {
        products: products, 
        cart: []
    })


    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
} 

export default CartContainer 

export const CartState = () => {
    return useContext(CartContext)
}