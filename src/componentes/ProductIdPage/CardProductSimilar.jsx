import '../styles/ProductPage/CardProductSimilar.css'

const CardProduct = ({ product }) => {
    window.scrollTo(1, 0);
    return (
        <div className='container__product' >
            <article className='card__product ' >
                <header className='card__header'>

                    <img className='card__image' src={product?.images[0].url} alt="" />
                </header>
                <section className='card__information'>
                    <h4 className='card__brand'>{product.brand}</h4>
                    <h3 className='card__title'>{product.title}</h3>
                    <article className='card__about'>
                        <h3 className='title-card__price'>Price</h3>
                        <span className='card__price'>${product.price}</span>
                    </article>
                    <button className='card__button'><i class='bx bx-cart-alt bx-md'></i></button>
                    <box-icon type="solid" color='white' name="cart-alt"></box-icon>
                </section>
            </article>
        </div>



    )
}

export default CardProduct