import React, { PropTypes } from 'react'

import Division from './Division'
import WelcomeMessage from './WelcomeMessage'

const DivisionList = ({divisions, loggedIn, openDrawer }) => {
  return (
    <div>
      {divisions && (divisions.length < 1) && <WelcomeMessage />}

      {divisions.map(division =>
        <Division
            key={division.name}
            division={division}
            loggedIn={loggedIn}
            openDrawer={openDrawer}
        />
      )}
    </div>
  )
}

export default DivisionList
