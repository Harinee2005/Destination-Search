import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails
    return (
      <li className="list-item">
        <img className="images" src={imgUrl} alt={name} />
        <p className="description">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
