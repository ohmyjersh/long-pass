import React from 'react'
import Header from './Header'
import SubmitButton from './SubmitButton'

function Container (props) {
  return (
    <div>
      <Header
        textContent='You need a long password'/>
      <div
        id='main-image'>
        <img src='https://imgs.xkcd.com/comics/password_strength.png' />
      </div>
      <Header
        textContent='Make me one'/>
      <SubmitButton />
    </div>
  )
}

export default Container
