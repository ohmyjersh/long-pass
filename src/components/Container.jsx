import React from 'react'
import Header from './Header'
import PasswordGeneratorContainer from './PasswordGeneratorContainer'

function Container (props) {
  return (
    <div>
      <Header
        textContent='You need a long password'/>
      <div
        id='main-image'>
        <img src='https://imgs.xkcd.com/comics/password_strength.png' />
      </div>
      <PasswordGeneratorContainer />
    </div>
  )
}

export default Container
