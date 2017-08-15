import React from 'react'
import PropTypes from 'prop-types'
import words from 'an-array-of-english-words'

import SubmitButton from './SubmitButton'
import Header from './Header'
import PasswordPresenter from './PasswordPresenter'
import WordLengthField from './WordLengthField'

class PasswordGeneratorContainer extends React.Component {
  constructor () {
    super()
    this.state = {passwordContent: '', passwordMaxWordLength: 1}
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
    this.handleMaxLengthInput = this.handleMaxLengthInput.bind(this)
  }

  pickRandomValue (array) {
    return (Math.floor(Math.random() * array.length))
  }

  generatePassword () {
    let newPass = []
    console.log(this.state.passwordMaxWordLength)
    const maxPassLength = this.state.passwordMaxWordLength
    const filteredWords = words.filter(word => word.length <= maxPassLength)
    for (let i = 0; i < 4; i++) {
      newPass[i] = filteredWords[this.pickRandomValue(filteredWords)]
    }
    return newPass.join(' ')
  }

  handleSubmitButtonClick () {
    const newPass = this.generatePassword()
    this.setState((prevState, props) => (
      {passwordContent: newPass}
    ))
  }

  handleMaxLengthInput (event) {
    const maxLength = parseInt(event.target.value, 10)
    this.setState((prevState, props) => (
      {passwordMaxWordLength: maxLength}
    ), this.handleSubmitButtonClick)
  }

  render () {
    return (
      <div>
        <Header
          textContent='Make me one'/>
        <WordLengthField
          newSelectionHandler={this.handleMaxLengthInput}
          value={this.state.passwordMaxWordLength}/>
        <SubmitButton
          clickHandler={this.handleSubmitButtonClick}/>
        <PasswordPresenter
          passwordContent={this.state.passwordContent}/>
      </div>
    )
  }
}

PasswordGeneratorContainer.propTypes = {
  passwordContent: PropTypes.string
}

export default PasswordGeneratorContainer
