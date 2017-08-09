import React from 'react'
import PropTypes from 'prop-types'
import words from 'an-array-of-english-words'

import SubmitButton from './SubmitButton'
import Header from './Header'
import PasswordPresenter from './PasswordPresenter'

class PasswordGeneratorContainer extends React.Component {
  constructor () {
    super()
    this.state = {passwordContent: ''}
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
  }

  pickRandomValue (array) {
    return (Math.floor(Math.random() * array.length))
  }

  generatePassword () {
    let newPass = []
    for (let i = 0; i < 4; i++) {
      newPass[i] = words[this.pickRandomValue(words)]
    }
    return newPass.join(' ')
  }

  handleSubmitButtonClick () {
    this.setState({passwordContent: this.generatePassword()})
  }

  render () {
    return (
      <div>
        <Header
          textContent='Make me one'/>
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
