import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../componentes/HomePage/CardProduct"
import '../componentes/styles/HomePage/HomePage.css'
import { useState, useEffect } from 'react'
import Aside from "../componentes/HomePage/Aside"
import Search from '../componentes/HomePage/Search'
import { getCartThunk, setCartG } from "../store/slices/cart.slice"

const HomaPage = () => {
   
    const [category, setCategory] = useState(0)
    
    const [price, setPrice] = useState(0)
    let products = useSelector(reducer => reducer.products)
    let products2
    let products3
   
    useEffect(() => {
    
     
    products3 = products?.filter(product =>  parseInt(product?.price) > price.from && parseInt(product?.price) < price.to) 
 
 
    console.log(products)
    
   getCartThunk()
    
    }, [category, price])

    const dispatch = useDispatch()

    const set = e => {
        setCategory(e)
        if(e == 0){
            SearchForPrice(0)
        }
       products2 = products?.filter(product => product?.category.name == category)
        dispatch(setCartG(products2))
        getCartThunk()
    }

    const SearchForPrice = data => {
        setPrice(data) 
        
        
        products3 = products?.filter(product =>  parseInt(product?.price) > price.from && parseInt(product?.price) < price.to) 
       
        dispatch(setCartG(products?.filter(product =>  parseInt(product?.price) > price.from && parseInt(product?.price) < price.to) ))
      
        getCartThunk()
        console.log(products3)
    }
    products3 = products?.filter(product =>  parseInt(product?.price) > price.from && parseInt(product?.price) < price.to) 
    products2  = products?.filter(product => product?.category.name == category)
   
    localStorage.setItem('home', 'pass')
    return (
        <div className="main__container">


        
            <Aside
            set={set}
            SearchForPrice={SearchForPrice}
            />
          


            <div className="products__container">

            
              <Search/>
              


                {
                    
                    products3 != 0 && products2 == 0
                 ?
                    products3?.map(product => (
                      
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    )) 
                    :
                    products2 != 0
                    ?
                    products2?.map(product => (
                      
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                    :
        
                    products?.map(product => (
                      
                        <CardProduct
                            key={product.id}
                            product={product}

                            
                        />
                    ))
                  
                }
            </div>
        </div>
    )
}

export default HomaPage