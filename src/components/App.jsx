import React from 'react'
import Container from './Container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App (props) {
  return (
    <MuiThemeProvider>
      <Container />
    </MuiThemeProvider>
  )
}

export default App
