import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../componentes/HomePage/CardProduct"
import '../componentes/styles/HomePage/HomePage.css'
import AsideMovilPage from '../pages/AsideMovilPage'
import Aside from "../componentes/HomePage/Aside"
import Search from '../componentes/HomePage/Search'
import { getCartThunk } from "../store/slices/cart.slice"
import getFilterItems from "../utils/getFilterItems"
import { useEffect } from "react"


const HomaPage = ({ visibleA, setVisibleA, visible }) => {

    const dispatch = useDispatch()

useEffect(()=>{

    dispatch(getCartThunk())
    localStorage.setItem('home', 'pass')

}, [])

    const products = useSelector(reducer => reducer.products)

    

    //FILTRADO SEARCH MAIN
    
    const {nameValue, inputName, handleFilterName, cbFilter, setFromTo} = getFilterItems()

    return (

        <div className="main__container">

            <Aside
               setFromTo={setFromTo}

            />
          
            <div className="products__container">

                <Search
                    visibleA={visibleA}
                    setVisibleA={setVisibleA}
                    visible={visible}
                    nameValue={nameValue}
                    handleFilterName={handleFilterName}
                    inputName={inputName}
                />

                {

                    products?.filter(cbFilter).map(product => (

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