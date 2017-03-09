import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper'

const styles = {
  paperStyle: {
    maxWidth: 400,
    margin: 'auto',
    padding: 20,
    marginTop: 30
  }
}

const WelcomeMessage = () => {
  return (
    <Paper style={styles.paperStyle}>
      <p>
        Enter your address to see your representatives - everyone you can cast a vote for. They are your employees. Make sure they are working for <b>you</b>.
      </p>
    </Paper>
  )
}

export default WelcomeMessage
