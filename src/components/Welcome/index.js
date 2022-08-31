import {Component} from 'react'
import './index.css'

export default class Welcome extends Component {
  state = {
    currentButtonText: 'Subscribe',
  }

  onButtonClick = () =>
    this.setState(previousButtonTextState => ({
      currentButtonText:
        previousButtonTextState.currentButtonText === 'Subscribe'
          ? 'Subscribed'
          : 'Subscribe',
    }))

  render() {
    const {currentButtonText} = this.state

    return (
      <div className="welcome-bg-container">
        <h1 className="welcome-header">Welcome</h1>
        <p className="welcome-message">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onButtonClick}
        >
          {currentButtonText}
        </button>
      </div>
    )
  }
}
