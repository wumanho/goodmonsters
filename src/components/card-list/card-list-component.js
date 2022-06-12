import {Component} from "react";

class CardList extends Component {
  render() {
    console.log('render from card list')
    const {data} = this.props
    return (
      <div className='card-list'>
        {
          data.map(d => {
            return <h1 key={d.id}>{d.name}</h1>
          })
        }
      </div>
    )
  }
}

export default CardList
