import React from 'react'
import Header from './Header'
import SplashImage from './SplashImage'
import Grid from 'material-ui/Grid'
import PasswordGeneratorContainer from './PasswordGeneratorContainer'

function Container (props) {
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={3}>
        </Grid>
        <Grid
          item
          md={9}>
          <Header
            textContent='You need a long password'/>
          <SplashImage
            imageUrl='https://imgs.xkcd.com/comics/password_strength.png'/>
          <PasswordGeneratorContainer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Container
