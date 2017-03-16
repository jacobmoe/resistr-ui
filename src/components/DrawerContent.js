import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import { white, grey900 } from 'material-ui/styles/colors'
import { FormsyRadio, FormsyRadioGroup } from 'formsy-material-ui/lib'

const styles = {
  titleLink: {
    color: white,
    textDecoration: 'none'
  },
  menuLink: {
    color: grey900,
    textDecoration: 'none'
  },
  settings: {
    padding: '0 16px' 
  }
}

const LoggedInContent = ({ settings, logout, updateSetting }) => {
  return (
    <div>
      <Link style={styles.menuLink} onClick={logout}>
        <MenuItem>Logout</MenuItem>
      </Link>

      <div style={styles.settings}>
        <Subheader>Show activity for</Subheader>
        <Formsy.Form onChange={updateSetting}>
          <FormsyRadioGroup 
            name="restrictToCurrentUser" 
            defaultSelected={settings.restrictToCurrentUser}>

            <FormsyRadio
              value={false}
              label="Everyone"
            />
            <FormsyRadio
              value={true}
              label="Just me"
            />
          </FormsyRadioGroup>
        </Formsy.Form>
      </div>
      <div style={styles.settings}>
        <Subheader>Time range</Subheader>
        <Formsy.Form onChange={updateSetting}>
          <FormsyRadioGroup 
            name="timePeriod" 
            defaultSelected={settings.timePeriod}>
            <FormsyRadio
              value="day"
              label="Day"
            />
            <FormsyRadio
              value="week"
              label="Week"
            />
            <FormsyRadio
              value="month"
              label="Month"
            />
            <FormsyRadio
              value="year"
              label="Year"
            />
          </FormsyRadioGroup>
        </Formsy.Form>
      </div>
    </div>
  )
}

const LoggedOutContent = () => {
  return (
    <div>
      <Link to={"/login"} style={styles.menuLink}>
        <MenuItem>Login</MenuItem>
      </Link>
      <Link to={"/register"} style={styles.menuLink}>
        <MenuItem>Register</MenuItem>
      </Link>
    </div>
  )
}

const DrawerContent = ({ settings, updateSetting, loggedIn, handleAppBarClick, logout }) => {
  return (
    <div>
      <AppBar
        title={<Link to="/" style={styles.titleLink}>Resistr</Link>}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={handleAppBarClick}
      />
      {
        loggedIn ? 
        <LoggedInContent settings={settings} updateSetting={updateSetting} logout={logout} /> : 
        <LoggedOutContent />
      }
    </div>
  )
}

export default DrawerContent
