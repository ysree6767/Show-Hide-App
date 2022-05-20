// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isSecondNameShown: false}

  toggleFirstName = () => {
    this.setState(prevState => ({
      isFirstNameShown: !prevState.isFirstNameShown,
    }))
  }

  toggleSecondName = () => {
    this.setState(prevState => ({
      isSecondNameShown: !prevState.isSecondNameShown,
    }))
  }

  render() {
    const {isFirstNameShown, isSecondNameShown} = this.state

    return (
      <div className="app-container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="container">
          <div className="button-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.toggleFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstNameShown && <p className="name">Joe</p>}
          </div>
          <div className="button-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.toggleSecondName}
            >
              Show/Hide Lastname
            </button>
            {isSecondNameShown && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
