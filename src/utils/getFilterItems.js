import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../store/slices/products.slice"
import { useDispatch, useSelector } from "react-redux"
import { setPricesG } from "../store/slices/productPrice"


const getFilterItems = () => {

    //filtered Search

    const [nameValue, setNameValue] = useState('')

    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const inputName = useRef()

    const dispatch = useDispatch()

    const products = useSelector(reducer => reducer.products)

    const price1 = useSelector(reducer => reducer.price)

    useEffect(()=> {
        if(products == 0) dispatch(getAllProductsThunk())
        
    },[products])



    const handleFilterName = () => {

        setNameValue(inputName.current.value)
    }
   
    const cbFilter = prod => {

        //filtered name

        const inputNameLower = nameValue.toLocaleLowerCase().trim()
        const nameReal = prod.title.toLowerCase()
        const filteredName = nameReal.includes(inputNameLower)

        //filtered Price
        
            const price = Number(prod.price)
       
           const filteredPrice = price1.from  <= price && price <= price1.to

           
            
        
       
        return filteredName && filteredPrice 
    }

    //Filtered Categories ASIDE

    const [categories, getAllCategories] = useFetch()



    useEffect(() => {

        getAllCategories('/categories')
        
    }, [])



    const handleAllCategories = () => {

        dispatch(getAllProductsThunk())
    }
    const filterByCategory = id => {

        dispatch(getFilteredProductsThunk(id))
    }

    
    return { nameValue, inputName, handleFilterName, cbFilter, handleAllCategories, filterByCategory, setFromTo}
}

export default getFilterItems