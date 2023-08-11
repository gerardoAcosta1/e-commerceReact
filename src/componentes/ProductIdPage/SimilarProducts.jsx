import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import CardProductSimilar from './CardProductSimilar'
import '../styles/ProductPage/SimilarProduct.css'

const SimilarProducts = ({ product }) => {

    const [productsByCategory, getProductsByCategory] = useFetch()

    useEffect(() => {
        if (product) getProductsByCategory(`/products?categoryId=${product?.category.id}`)
    }, [product])
    const [first, setfirst] = useState([])

    for (let i = 0; i < 15; i++) {
        first.push({ id: i, brand: 'samsung', title: 'un producto', price: 2345, images: '../fotos/imagen2.jpg' })
    }

    const cbFilter = prod => {
        if (prod.id !== product.id) {
            return prod
        }
    }

    return (
        <div>
            <h3 className="title__similar">Discovery similar items</h3>
                <div className='similar__product'>
                    { /*
                        first?.map(product => (
                            <CardProductSimilar
                                key={product.id}
                                product={product}
                            />
                        ))*/
                       
                        productsByCategory?.filter(cbFilter).map(product => (
                            <CardProductSimilar
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
      

    )
}

export default SimilarProducts