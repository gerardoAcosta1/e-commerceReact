import { createSlice } from "@reduxjs/toolkit";
import getConfigToken from '../../utils/getConfigToken.js'
import axios from "axios";
import useFetch from "../../hooks/useFetch.js";
import { useEffect } from "react";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        setCartG: (state, action) => state =  action.payload,
        addCartG:(state, action) => [...state, action.payload],
        deleteCartG: (state,action) => state.filter(product =>product.id != action.payload),
        updateCartG: (state,action) => state.filter(product => {
            if(product.id == action.payload.id) {
              
             state.splice(state.indexOf(product), 1, {nada: 'nada'})
             deleteCartG(product.id)
              console.log(action.payload)
            }
           
        })
    }
})
export const {setCartG, addCartG, deleteCartG, updateCartG} = cartSlice.actions

export default cartSlice.reducer

export const getCartThunk = () => dispatch =>{
    
        
       
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        axios.get(url, getConfigToken())
        .then(res => {

            dispatch(setCartG(res.data))
          return res.data
                
          console.log(res.data)
        })
        
        .catch(err => console.log(err))
    
    
}