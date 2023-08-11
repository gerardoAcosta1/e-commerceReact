import { useForm } from 'react-hook-form'
import '../styles/HomePage/Aside.css'

const Aside = ({ set, SearchForPrice }) => {

  const { register, reset, handleSubmit } = useForm()

  const submit = data =>{
    SearchForPrice(data)
    reset({
      from: '',
      to: ''
    })
  }

  return (
    <div className="container__aside">
      <div className="header__aside">
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