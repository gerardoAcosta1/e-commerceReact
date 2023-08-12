import React, { useEffect, useState } from 'react'
import { addCartG, deleteCartG, updateCartG, getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/CartProduct.css'
import useCartApi from '../../hooks/useCartApi'

const CartProduct = ({ product }) => {

    const [count, setcount] = useState(1)
    const { addProductInCart, deleteProductToCart, updateProductInCart } = useCartApi()
    const dispatch = useDispatch()
    let arr

    useEffect(()=>{
       arr =  dispatch(getCartThunk())
       console.log(arr)
    },[count])

    const handleCounter = e => {
        if (e === 1) {

            setcount(count + 1)
            let data = { quantity: product?.quantity + 1 }
            updateProductInCart(data, product?.id)
            getCartThunk()

        }
        if ( e == 0 && product?.quantity > 1) {

            setcount(count - 1)
            let data = { quantity: product?.quantity - 1 }
            updateProductInCart(data, product?.id)
            getCartThunk()

        }


    }
    const deleteProduct = () => {

        if (product?.quantity > 1) {

            let data = { quantity: product?.quantity - 1 }
            updateProductInCart(data, product?.id)
            dispatch(getCartThunk())
        } else {
            deleteProductToCart(product?.id)

        }

    }




    return (
        <div className='CartProduct' >
            <div className='sections'>
                <section className='section__1__cart'>
                    <img  className='image__cart' src={product?.product?.images[0].url} alt="" />
                </section>
                
                <section className="section__2__cart">
                    <h3 className="title__cart">{product?.product?.title}</h3>

                    <div className="buttons__main__cart">
                        <button className="button__cart" onClick={() => handleCounter(0)}>-</button>
                        <span className="counter__cart">{product?.quantity}</span>
                        <button className="button__cart" onClick={() => handleCounter(1)}>+</button>
                    </div>

                </section>

                <section className="section__3__cart">

                    <span className="icon__cart"><i onClick={deleteProduct} class='bx bx-trash bx-sm'></i></span>
                </section>

            </div>
            <div className='section__4__cart'>
                <h5>X{product.quantity}</h5>
                <h5 className='total__cart'>Total</h5>
                <h4 className='price__cart'> ${product?.product?.price}</h4>
            </div>
         


        </div>
    )
}

export default CartProduct