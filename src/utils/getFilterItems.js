import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../store/slices/products.slice"
import { useDispatch, useSelector } from "react-redux"


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
       
        const filteredPrice =fromTo.from  <= price && price <= fromTo.to

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