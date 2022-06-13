import './search-box-style.css'

const SearchBox = (props) => {
  const {onChangeHandler, placeholder, className} = props
  return (
    <div>
      <input className={`search-box ${className}`} type='search' placeholder={placeholder}
             onChange={onChangeHandler}/>
    </div>
  )
}

export default SearchBox
