import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productCategory } from "./cart.slice";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProductsG: (state, action) => action.payload,
        productCategoryG: (state, action) => state?.filter(product => product?.category?.name == action.payload),
        productByPrice: (state, action) => state.filter(product => parseInt(product?.price) > action.payload.from && parseInt(product?.price) < action.payload.to)
    }
})

export const {setProductsG, productCategoryG, productByPrice} = productsSlice.actions
export default productsSlice.reducer

export const getAllProductsThunk = () => dispatch =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))
    .catch(err => console.log(err))
    
}