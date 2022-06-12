import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
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
    console.log('render')
    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const displayList = monsters.filter(m => {
      const lower = m.name.toLowerCase()
      return lower.includes(searchField)
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>
        {
          displayList.map(m => {
            return <h1 key={m.id}>{m.name}</h1>
          })
        }
      </div>)
  }
}

export default App;
