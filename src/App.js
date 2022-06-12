import './App.css';
import {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  const [searchField, setSearchField] = useState('a')
  const [monsters, setMonsters] = useState([])
  const [displayList, setDisplayList] = useState(monsters)

  const onMounted = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(resJson => setMonsters(resJson))
  }
  useEffect(onMounted, [])

  useEffect(() => {
    const list = monsters.filter(m => {
      const lower = m.name.toLowerCase()
      return lower.includes(searchField)
    })
    setDisplayList(list)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchStr = e.target.value.toLowerCase()
    setSearchField(searchStr)
  }


  return (
    <div className="App">
      <h1 className='app-title'>Good Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange} placeholder={'search by word'}
        className='monsters-search-box'
      />
      <CardList data={displayList}/>
    </div>
  )
}

export default App;
