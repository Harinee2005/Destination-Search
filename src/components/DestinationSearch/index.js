import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputStr: ''}

  getInput = event => {
    this.setState({inputStr: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputStr} = this.state

    const searchResult = destinationsList.filter(eachItem => {
      const name = eachItem.name.toLowerCase()
      const inputName = inputStr.toLowerCase()
      return name.includes(inputName)
    })

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar">
          <input
            onChange={this.getInput}
            className="input-bar"
            type="search"
            placeholder="Search"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <ul>
          {searchResult.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
