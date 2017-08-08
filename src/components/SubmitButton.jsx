import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/flight-takeoff'
import words from 'an-array-of-english-words'

class SubmitButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {passwordIsVisible: false}
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
  }
  handleSubmitButtonClick () {
    this.setState({passwordIsVisible: true})
  }
  pickRandomValue (array) {
    return (Math.floor(Math.random() * array.length))
  }
  generatePassword () {
    let newPass = []
    for (let i = 0; i < 3; i++) {
      newPass[i] = words[this.pickRandomValue(words)]
    }
    return newPass.join(' ')
  }
  render () {
    let content = null
    if (this.state.passwordIsVisible) {
      content = this.generatePassword()
    }
    return (
      <div
        onClick={this.handleSubmitButtonClick}
      >
        <FloatingActionButton
          id="new-password-submit"
        >
          <ContentAdd />
        </FloatingActionButton>
        <div id="password-content">{content}</div>
      </div>
    )
  }
}

export default SubmitButton
