import { useForm } from 'react-hook-form'
import '../componentes/styles/HomePage/AsideMovil.css'
import usePriceAndCategory from '../hooks/usePriceAndCategory'

const Aside = ({visible,visibleA, setVisibleA}) => {
  const {set, SearchForPrice} = usePriceAndCategory()


  let xStart = 0
  let drag = document.getElementById('AsideMovil')

  const { register, reset, handleSubmit } = useForm()

  const submit = data =>{
    SearchForPrice(data)
    reset({
      from: '',
      to: ''
    })
  }

   //Close the modal with sweiper**********

   const start = e => {
    xStart = e.changedTouches[0].clientX
  }
  const inicio = e => {

    let touch = e.changedTouches[0]
    let xEnd = touch.clientX
    let move = xEnd - xStart

    if (move > 140) {

      setVisibleA(!visibleA)

    }
  }

  return (
    <div className={`aside__movil-main ${visibleA ? '': 'hiden'} `}  draggable='true' id='AsidelMovil' onTouchStart={start} onTouchEnd={inicio}>
      <div className={`header__aside`}>
        <div className='aside__bar1'>
        <h4 className="title__header-aside">Price</h4>
        <h4 className="icono">y</h4>
        </div>
      <hr />
        <form className='container__form' onSubmit={handleSubmit(submit)}>
          <div className="container__price">

            <label htmlFor="from">From</label>

            <input className='input__price' {...register('from')} type="text" id="from" />


            </div>
            <div>

              <label htmlFor="to">To</label>

              <input {...register('to')} type="text" id="to" />

            </div>
           
          <button>Search</button>
        </form>

      </div>
      <div className="body__aside">
        <button onClick={() => set('Smartphones')}>Smartphones</button>
        <button onClick={() => set('Smart TV')}>Smart tv</button>
        <button onClick={() => set('Stoves')}>Stoves</button>
        <button onClick={() => set(0)}>All Products</button>
      </div>
    </div>
  )
}

export default Aside