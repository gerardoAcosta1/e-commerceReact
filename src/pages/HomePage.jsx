import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../componentes/HomePage/CardProduct"
import '../componentes/styles/HomePage/HomePage.css'
import { useState, useEffect } from 'react'
import Aside from "../componentes/HomePage/Aside"
import Search from '../componentes/HomePage/Search'
import { getCartThunk} from "../store/slices/cart.slice"
import usePriceAndCategory from "../hooks/usePriceAndCategory"
import { getAllProductsThunk, productByPrice } from "../store/slices/products.slice"


const HomaPage = ({visibleA, setVisibleA, visible}) => {
    
    const [price, setPrice] = useState(0)

    //let products = useSelector(reducer => reducer.products)
    const dispatch = useDispatch()
    
  const {set,products, products2, products3,category,productsByCategory, productByPrice} =usePriceAndCategory()

   
 useEffect(()=>{
    dispatch(getAllProductsThunk())
console.log(products)
 },[category])

 console.log(productsByCategory)

    localStorage.setItem('home', 'pass')

    return (

        <div className="main__container">

            <Aside
                set={set}
                
            />
        
            <div className="products__container">

                <Search
                setVisibleA={setVisibleA}
                visibleA={visibleA}
                visible={visible}
              
                />

                {

                    productByPrice != 0 && products2 == 0
                        ?
                        products2e?.map(product => (

                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                        :
                        productsByCategory != 0
                            ?
                            productsByCategory?.map(product => (

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