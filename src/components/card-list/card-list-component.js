import './card-list-style.css'
import Card from "../card/card-component";

const CardList = (props) => {
  const {data} = props
  return (
    <div className='card-list'>
      {
        data.map(d => {
          return <Card key={d.id} monster={d}/>
        })
      }
    </div>
  )
}

export default CardList
