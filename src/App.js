import {Component} from 'react'
import './App.css';
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(resJson => {
        this.setState(() => {
          return {monsters: resJson}
        })
      })
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {searchField: e.target.value.toLowerCase()}
    })
  }

  render() {
    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const displayList = monsters.filter(m => {
      const lower = m.name.toLowerCase()
      return lower.includes(searchField)
    })

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange} placeholder={'search by word'}
          className='monsters-search-box'
        />
        <CardList data={displayList}/>
      </div>)
  }
}

export default App;
