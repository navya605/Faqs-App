// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqsList: []}

  componentDidMount() {
    const {faqsList} = this.props
    this.setState({faqsList})
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="faqs-bg-container">
        <div className="faqs-inner-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-style">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} itemDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
