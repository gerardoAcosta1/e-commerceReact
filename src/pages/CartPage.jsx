import { useDispatch, useSelector } from 'react-redux'
import '../componentes/styles/CartPage.css'
import { useEffect } from 'react'
import {  getCartThunk } from '../store/slices/cart.slice'
import CartProduct from '../componentes/shared/CartProduct'
import usePurchases from '../hooks/usePurchases'

const CartPage = ({ visible, count }) => {

  let total = 0

 

  const { makePurchase, getAllPurchases, purchases } = usePurchases()

  const cart = useSelector(reducer => reducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getCartThunk())

  }, [visible, cart])


  total = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product?.price
    return acc + subTotal
  }, 0)


  const buy = () => {

    makePurchase()
    console.log(purchases)
    getAllPurchases()

  }
  
  return (
    <div
      onClick={e => e.stopPropagation()}
      className={`main__cart ${visible ? '' : 'hiden'}`}
      draggable='true'
      id='cartPage'
      >

      <h3 className='main__cart__title'> Buy Cars </h3>
      

      <div className="content__cart" >
        {

          cart?.map(product => (
            <CartProduct
              draggable
              key={product.id}
              product={product}
            />
          ))
        }

      </div>
      <div className='container__button__buy'>
        <div className='price__buy'>
          <h3>${total}</h3>
        </div>
        <button
          onClick={buy}
          className='button__buy'>Buy</button>
      </div>

    </div>
  )
}

export default CartPage