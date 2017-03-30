import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Snackbar from 'material-ui/Snackbar'
import LinearProgress from 'material-ui/LinearProgress'
import { Link } from 'react-router'
import { white, orange200 } from 'material-ui/styles/colors'
import DrawerContent from './DrawerContent'
import { Grid } from 'react-flexbox-grid'

const styles = {
  appBarLink: {
    color: white,
    textDecoration: 'none'
  },
  progressBar: {
    backgroundColor: white
  },
  progressBarPlaceholder: {
    height: '4px'
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

const Progress = ({ requestStarted }) => {
  if (requestStarted) {
    return (
      <LinearProgress 
        style={styles.progressBar}
        mode="indeterminate" 
        color={orange200} />
    )
  } else {
    return (<div style={styles.progressBarPlaceholder}></div>)
  }
}

const Layout = (props) => {
  return (
    <div>
      <MainAppBar handleAppBarClick={props.handleAppBarClick} />
      <Progress requestStarted={props.requestStarted} />

      <Drawer
          onRequestChange={props.handleAppBarClick}
          open={props.drawerOpen}
          docked={false}
      >
        <DrawerContent
          handleAppBarClick={props.handleAppBarClick}
          logout={props.logout}
          loggedIn={props.loggedIn}
          updateSetting={props.updateSetting}
          settings={props.settings}
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
