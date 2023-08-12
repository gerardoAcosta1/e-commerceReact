import { useDispatch, useSelector } from 'react-redux'
import '../styles/CartPage.css'
import useCartApi from '../../hooks/useCartApi'
import { useEffect, useRef, useState } from 'react'
import { addCartG, getCartThunk } from '../../store/slices/cart.slice'
import CartProduct from './CartProduct'
import { DragEvent } from 'react'
import usePurchases from '../../hooks/usePurchases'

const CartPage = ({visible, count,setVisible}) => {

  let total = 0
 
  const [x, setX] = useState(0)

const {addProductInCart, deleteProductToCart} = useCartApi()
const {makePurchase, getAllPurchases, purchases} = usePurchases()

  const cart = useSelector(reducer => reducer.cart)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getCartThunk())

    console.log(cart)
  

    
  },[])

  const deleteProduct = () => {
    
    deleteProductToCart( cart[0]?.id)
  
  }

  total = cart.reduce((acc,cv) => {
    const subTotal = cv.quantity * cv.product?.price
    return acc + subTotal
  },0)
 
  window.addEventListener('load', e => {
    let drag = document.getElementById('cartPage')
    drag.addEventListener('touchmove', e => {
      e.preventDefault()
      let dragged = e.target
      drag.className += " hiden";
      console.log('drag')
    })

  })

const buy = () =>{
  makePurchase()
  console.log(purchases)
  getAllPurchases()
}

 
  return (
    <div
    id='cartPage' draggable='true'
     onClick={e => e.stopPropagation()} 
     className={`main__cart ${visible ? '' : 'hiden'}`}
   
     >
      <h3 className='main__cart__title' id='cartPage' > Buy Cart </h3>
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