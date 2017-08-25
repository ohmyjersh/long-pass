import React from 'react'
import words from 'more-words'

import Header from './Header'
import SplashImage from './SplashImage'
import Grid from 'material-ui/Grid'
import SubmitButton from './SubmitButton'
import PasswordPresenter from './PasswordPresenter'
import SliderFilter from './SliderFilter.jsx'

class StateContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      passwordContent: '',
      passwordMaxLength: 20,
      passwordMaxWordLengthPossible: 5,
      passwordMaxWordLengthCurrent: 4
    }
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
    this.handleMaxWordLengthInput = this.handleMaxWordLengthInput.bind(this)
    this.handleMaxPasswordLengthInput = this.handleMaxPasswordLengthInput.bind(this)
    this.handleUpdatingPasswordLength = this.handleUpdatingPasswordLength.bind(this)
  }

  pickRandomValue (array) {
    return (Math.floor(Math.random() * array.length))
  }

  generatePassword () {
    let newPass = []
    const maxPassLength = this.state.passwordMaxWordLengthCurrent
    const filteredWords = words.filter(word => word.length <= maxPassLength)
    for (let i = 0; i < 4; i++) {
      newPass[i] = filteredWords[this.pickRandomValue(filteredWords)]
    }
    return newPass.join(' ')
  }

  handleSubmitButtonClick () {
    const newPass = this.generatePassword()
    scroll(0, 1000)
    this.setState((prevState, props) => (
      {passwordContent: newPass}
    ))
  }

  handleMaxWordLengthInput (event) {
    const currentValue = parseInt(event.target.value, 10)
    this.setState((prevState, props) => (
      {
        passwordMaxWordLengthCurrent: currentValue
      }
    ), this.handleSubmitButtonClick)
  }

  handleMaxPasswordLengthInput (event) {
    const maxLength = parseInt(event.target.value, 10)
    this.setState((prevState, props) => (
      {
        passwordMaxLength: maxLength
      }
    ), this.handleUpdatingPasswordLength)
  }

  handleUpdatingPasswordLength () {
    const newMaxWordLength = Math.floor(this.state.passwordMaxLength / 4)
    this.setState((prevState, props) => {
      const adjustedMaxWordLength = (prevState.passwordMaxWordLengthCurrent < newMaxWordLength ? prevState.passwordMaxWordLengthCurrent : newMaxWordLength)
      return {
        passwordMaxWordLengthPossible: newMaxWordLength,
        passwordMaxWordLengthCurrent: adjustedMaxWordLength
      }
    }, this.handleSubmitButtonClick)
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
              <SliderFilter
                title='Max Password Length'
                id='slider-max-password-length'
                min={12}
                max={28}
                newSelectionHandler={this.handleMaxPasswordLengthInput}
                value={this.state.passwordMaxLength}/>

              <SliderFilter
                title='Max Individual Word Length'
                id='slider-max-word-length'
                min={3}
                max={this.state.passwordMaxWordLengthPossible}
                newSelectionHandler={this.handleMaxWordLengthInput}
                value={this.state.passwordMaxWordLengthCurrent}/>
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
