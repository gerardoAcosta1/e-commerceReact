import { getCartThunk, setCartG } from "../store/slices/cart.slice"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { productCategoryG, getAllProductsThunk , productByPrice, setProductsG} from "../store/slices/products.slice"
const usePriceAndCategory = () => {

    const [category, setCategory] = useState(0)
    const [price, setPrice] = useState(0)
    const [productsByCategory, setProductsByCategory] = useState(0)

    let products = useSelector(reducer => reducer.products)

    let products3 = 0

    const dispatch = useDispatch()

    const set = e => {

        setCategory(e)
        if (e == 0) {

            SearchForPrice(0)
        }
        //products2 = dispatch(productCategoryG(category))
        dispatch(setProductsG(products?.filter(product => product?.category.name == category)))
        console.log(productsByCategory) 
        
        return productsByCategory
    }
    const SearchForPrice = data => {

        
        products3 = products?.filter(product => parseInt(product?.price) > data.from && parseInt(product?.price) < data.to)
        dispatch(productByPrice(data))

    }
    if(products == 0){
       dispatch(getAllProductsThunk())
    }
    return { products,  products3, productsByCategory, category, set, SearchForPrice, productByPrice }
}

export default usePriceAndCategory