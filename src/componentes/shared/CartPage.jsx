import { useDispatch, useSelector } from 'react-redux'
import '../styles/CartPage.css'
import { getCartThunk } from '../../store/slices/cart.slice'
import CartProduct from './CartProduct'
import usePurchases from '../../hooks/usePurchases'

const CartPage = ({ visible, setVisible }) => {

  const { makePurchase, getAllPurchases, purchases } = usePurchases()

  const cart = useSelector(reducer => reducer.cart)

  let total = 0
  let xStart = 0

  window.document.addEventListener('click', e => {

    if (visible) {
      setVisible(!visible)
    }
  })


  //Total in Car to Buy

  total = cart.reduce((acc, cv) => {

    const subTotal = cv.quantity * cv.product?.price
    return acc + subTotal

  }, 0)

  //Close the modal with sweiper**********

  const start = e => {
    xStart = e.changedTouches[0].clientX
  }
  const inicio = e => {

    let touch = e.changedTouches[0]
    let xEnd = touch.clientX
    let move = xEnd - xStart

    if (move > 100) {


      setVisible(false)

    }
  }

  //Buy Car ******************

  const buy = () => {

    makePurchase()
    getAllPurchases()

  }


  return (
    <div
      id='cartPage' onTouchStart={e => start(e)} onTouchEnd={e => inicio(e)}
      onClick={e => e.stopPropagation()}
      className={`main__cart ${visible ? '' : 'hiden'}`} >

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
          <h4 className='total-title-buy'>total</h4>
          <h3 className='total-price'>${total}</h3>
        </div>

        <button
          onClick={buy}
          className='button__buy'>Buy
        </button>
      </div>
    </div>
  )
}

export default CartPage