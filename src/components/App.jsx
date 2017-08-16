import React from 'react'
import Container from './Container'
import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui/styles'
import { blue, red } from 'material-ui/colors'

const THEME = createMuiTheme({
  palette: createPalette({
    primary: blue,
    error: red
  })
})

function App (props) {
  return (
    <MuiThemeProvider theme={THEME}>
      <Container />
    </MuiThemeProvider>
  )
}

export default App
