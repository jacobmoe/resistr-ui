import React from 'react'
import Footer from './Footer'
import LocationForm from '../containers/LocationForm'
import RepCardList from '../containers/RepCardListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <div>
      <LocationForm />
      <RepCardList />
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App
