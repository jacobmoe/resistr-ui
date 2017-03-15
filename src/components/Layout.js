import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Snackbar from 'material-ui/Snackbar'
import { Link } from 'react-router'
import { white } from 'material-ui/styles/colors'
import DrawerContent from './DrawerContent'
import { Grid } from 'react-flexbox-grid'

const styles = {
  appBarLink: {
    color: white,
    textDecoration: 'none'
  }
}

const MainAppBar = ({ handleAppBarClick }) => {
  return (
    <AppBar
        title={
          <div>
            <Link to="/" style={styles.appBarLink}>
              Resistr
            </Link>
          </div>
        }
        onLeftIconButtonTouchTap={handleAppBarClick}
    />
  )
}

const Layout = (props) => {
  return (
    <div>
      <MainAppBar handleAppBarClick={props.handleAppBarClick} />
      <Drawer
          onRequestChange={props.handleAppBarClick}
          open={props.drawerOpen}
          docked={false}
      >
        <DrawerContent
          handleAppBarClick={props.handleAppBarClick}
          logout={props.logout}
          loggedIn={props.loggedIn}
        />
      </Drawer>

      <Grid>
        {props.children}
      </Grid>

      <Snackbar
        open={!!props.snackbarMessage}
        message={props.snackbarMessage}
        autoHideDuration={4000}
        onRequestClose={props.handleSnackbarClose}
      />
    </div>
  )
}

export default Layout
