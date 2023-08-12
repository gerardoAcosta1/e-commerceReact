import '../styles/HomePage/Search.css'

const Search = ({ visibleA, setVisibleA, visible}) => {

  if(visible){
    setVisibleA(!visible)
  }
  return (
    <div className="container__input">
      <form className="form__input">
        <input className="input" type="text" placeholder=' What are you looking for?' />
        <button className='button__input'><box-icon color='white' name='search'></box-icon></button>
      </form>
      <div className="Filter">
        <h4 onClick={() => setVisibleA(!visibleA)} className="Filter__name" ><i class='bx bx-user bx-bg'></i>Filters</h4>
      </div>
    </div>
  )
}

export default Search