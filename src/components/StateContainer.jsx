import React from 'react'
import words from 'an-array-of-english-words'

import Header from './Header'
import SplashImage from './SplashImage'
import Grid from 'material-ui/Grid'
import SubmitButton from './SubmitButton'
import PasswordPresenter from './PasswordPresenter'
import WordLengthField from './WordLengthField'

// import PasswordGeneratorContainer from './PasswordGeneratorContainer'

class StateContainer extends React.Component {
  constructor () {
    super()
    this.state = {passwordContent: '', passwordMaxWordLength: 5}
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
    this.handleMaxLengthInput = this.handleMaxLengthInput.bind(this)
  }

  pickRandomValue (array) {
    return (Math.floor(Math.random() * array.length))
  }

  generatePassword () {
    let newPass = []
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
        <Grid container>
          <Grid
            item
            md={12}>
            <div>
              <Header
                id="banner"
                textContent='You Need A Long Password'/>
              <SplashImage
                id="main-image"
                imageUrl='https://imgs.xkcd.com/comics/password_strength.png'/>
              <SubmitButton
                id="new-password-submit"
                clickHandler={this.handleSubmitButtonClick}/>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid
            item
            id="control-panel"
            md={6}>
            <div>
              <WordLengthField
                newSelectionHandler={this.handleMaxLengthInput}
                value={this.state.passwordMaxWordLength}/>
            </div>
          </Grid>
          <Grid
            item
            md={6}>

            <PasswordPresenter
              passwordContent={this.state.passwordContent}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default StateContainer
