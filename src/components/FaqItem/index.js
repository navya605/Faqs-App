// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  iconClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {itemDetails} = this.props
    const {isClicked} = this.state
    const {questionText, answerText} = itemDetails

    const imageUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isClicked ? 'minus' : 'plus'
    return (
      <li className="list-item">
        <div className="list-item-container">
          <h1 className="list-item-heading">{questionText}</h1>
          <img
            src={imageUrl}
            alt={altText}
            className="logo"
            onClick={this.iconClicked}
          />
        </div>
        <div>
          {isClicked ? (
            <div>
              <hr />
              <p className="list-item-desc">{answerText}</p>
            </div>
          ) : null}
        </div>
      </li>
    )
  }
}

export default FaqItem
