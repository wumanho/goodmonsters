import {Component} from "react";
import './card-list-style.css'
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    const {data} = this.props
    return (
      <div className='card-list'>
        {
          data.map(d => {
            return <Card monster={d}/>
          })
        }
      </div>
    )
  }
}

export default CardList
