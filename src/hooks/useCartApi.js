import { useDispatch } from "react-redux"
import { addCartG, deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import axios from "axios"
const useCartApi = () => {
const dispatch = useDispatch()
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    //POST

    const addProductInCart = data =>{
        const url = `${baseUrl}/cart`
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getCartThunk())

        })
        .catch(err => console.log(err.response.data.error))
    }
    
    //DELETE

    const deleteProductToCart =( id) => {
        const url = `${baseUrl}/cart/${id}`
        axios.delete(url, getConfigToken())
        .then(res => {
           
           // dispatch(getCartThunk())
           dispatch(deleteCartG(id))
            dispatch(getCartThunk())
          
        })
        .catch(err => console.log(err.response.data.error))
    }

    //*****************UPDATE**************************
    const updateProductInCart = (data , id) =>{
        const url = `${baseUrl}/cart/${id}`
        axios.put(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getCartThunk())

        })
        .catch(err => console.log(err))
    }


    return {addProductInCart, deleteProductToCart,  updateProductInCart}
}

export default useCartApi