import React from 'react'
import smooth from 'smoothscroll-polyfill'
import StateContainer from './StateContainer'
import {
  MuiThemeProvider,
  createMuiTheme,
  createPalette
} from 'material-ui/styles'
import { blue, red } from 'material-ui/colors'

smooth.polyfill()
const THEME = createMuiTheme({
  palette: createPalette({
    primary: blue,
    error: red
  })
})

const App = (props) => {
  return (
    <MuiThemeProvider theme={THEME}>
      <StateContainer />
    </MuiThemeProvider>
  )
}

export default App
